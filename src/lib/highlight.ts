/**
 * 极简的 shell 语法高亮，**构建时**执行。
 *
 * 之前这段逻辑跑在 React 岛屿里，用 dangerouslySetInnerHTML 拼 HTML。
 * 现在改为在构建期把每行切成 token，由 Astro 模板负责转义与输出：
 *   - 不再需要 dangerouslySetInnerHTML（消除 XSS 面）
 *   - 不再需要客户端 JS 才能看到高亮
 *   - 复制按钮与高亮彻底解耦
 */

export type TokenKind = 'plain' | 'comment' | 'string' | 'flag' | 'command' | 'env';

export interface Token {
  kind: TokenKind;
  text: string;
}

/** 环境变量赋值：ANTHROPIC_API_KEY=... */
const ENV_ASSIGNMENT = /^([A-Z_][A-Z0-9_]*=)(\S*)/;

/** 注释 / 字符串 / 命令行参数 / 命令与环境变量名 */
const TOKEN = new RegExp(
  [
    '(#.*$)', // 1 注释
    '("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')', // 2 字符串
    '(\\s--?[\\w-]+)', // 3 长/短参数
    '\\b(?:curl|wget|bash|sh|npx|pnpm|npm|git|cd|if|then|else|fi|command|shasum|sha256sum' +
      '|paperclipai|paperclip|onboard|test-drive)\\b', // 4 命令
    '\\b(?:ANTHROPIC_API_KEY|OPENAI_API_KEY|OPENROUTER_API_KEY)\\b', // 5 环境变量
  ].join('|'),
  'g',
);

/** 把一行 shell 切成 token；'plain' 之外的类型由调用方决定呈现方式 */
export function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];

  // 前置的环境变量赋值，例如 ANTHROPIC_API_KEY=...
  const env = ENV_ASSIGNMENT.exec(line);
  let base = 0;
  if (env) {
    tokens.push({ kind: 'env', text: env[1] ?? '' });
    if (env[2]) tokens.push({ kind: 'string', text: env[2] });
    base = env[0].length;
  }

  // 注意：matchAll 的下标相对 subject，所有偏移都以此为基准
  const subject = line.slice(base);
  let cursor = 0;

  for (const match of subject.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > cursor) tokens.push({ kind: 'plain', text: subject.slice(cursor, index) });

    const kind: TokenKind =
      match[1] !== undefined
        ? 'comment'
        : match[2] !== undefined
          ? 'string'
          : match[3] !== undefined
            ? 'flag'
            : 'command';

    tokens.push({ kind, text: match[0] });
    cursor = index + match[0].length;
  }

  if (cursor < subject.length) tokens.push({ kind: 'plain', text: subject.slice(cursor) });

  return tokens;
}

/**
 * 整段代码按行切分。
 * 同时归一化换行符：仓库文件是 CRLF，模板字符串里的换行会带 \r，
 * 若不处理，复制到剪贴板的命令就会带上看不见的 \r 而无法直接粘贴执行。
 */
export function tokenize(code: string): Token[][] {
  return normalizeNewlines(code).split('\n').map(tokenizeLine);
}

export function normalizeNewlines(code: string): string {
  return code.replace(/\r\n?/g, '\n');
}
