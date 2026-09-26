import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  code: string;
  title: string;
  note?: string;
}

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
};

const escapeHtml = (value: string) => value.replace(/[&<>"]/g, (ch) => ESCAPES[ch]);

/**
 * 极简 shell 语法高亮：注释 / 字符串 / 命令 / 参数。
 * 只做一层正则切分，够用且没有额外依赖。
 */
const TOKEN =
  /(#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\s--?[\w-]+)|(\b(?:curl|wget|bash|sh|npx|pnpm|npm|git|cd|if|then|else|fi|command|shasum|sha256sum|paperclipai|paperclip|onboard|test-drive|ANTHROPIC_API_KEY|OPENAI_API_KEY|OPENROUTER_API_KEY)\b)/g;

function highlightLine(line: string): string {
  let out = '';
  let lastIndex = 0;

  for (const match of line.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    out += escapeHtml(line.slice(lastIndex, index));

    const [raw, comment, str, flag, command] = match;
    if (comment !== undefined) {
      out += `<span class="text-ink-600 italic">${escapeHtml(raw)}</span>`;
    } else if (str !== undefined) {
      out += `<span class="text-mint-300">${escapeHtml(raw)}</span>`;
    } else if (flag !== undefined) {
      out += `<span class="text-brand-300">${escapeHtml(raw)}</span>`;
    } else if (command !== undefined) {
      out += `<span class="font-medium text-ink-100">${escapeHtml(raw)}</span>`;
    }

    lastIndex = index + raw.length;
  }

  out += escapeHtml(line.slice(lastIndex));
  return out || '&nbsp;';
}

export default function CodeBlock({ code, title, note }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const area = document.createElement('textarea');
      area.value = code;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      // 兼容不支持 Clipboard API 的旧浏览器
      const legacyCopy = (document as unknown as { execCommand?: (id: string) => boolean }).execCommand;
      legacyCopy?.call(document, 'copy');
      area.remove();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }, [code]);

  return (
    <div className="card group overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-ink-800 px-4 py-3">
        <span className="font-mono text-xs text-ink-300">{title}</span>
        <button
          type="button"
          onClick={copy}
          aria-live="polite"
          className="inline-flex items-center gap-1.5 rounded-md border border-ink-700 px-2.5 py-1.5 text-xs text-ink-300 transition hover:border-ink-600 hover:bg-ink-850 hover:text-ink-100"
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" className="size-3.5 text-mint-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              已复制
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5.5 15H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v.5" />
              </svg>
              复制
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-6">
        <code
          className="font-mono text-ink-300"
          dangerouslySetInnerHTML={{
            __html: code.split('\n').map(highlightLine).join('\n'),
          }}
        />
      </pre>

      {note ? <p className="border-t border-ink-800 px-4 py-3 text-xs leading-relaxed text-ink-500">{note}</p> : null}
    </div>
  );
}
