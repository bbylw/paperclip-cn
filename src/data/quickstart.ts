import { links } from './site';

export interface Snippet {
  id: string;
  title: string;
  lang: 'bash';
  code: string;
  note?: string;
}

/** 快速开始：安装与启动 */
export const quickstartSnippets = [
  {
    id: 'install',
    title: '一键安装（推荐）',
    lang: 'bash',
    code: `curl -fsSLO https://paperclip.ing/install.sh
curl -fsSLO https://paperclip.ing/install.sh.sha256
if command -v sha256sum >/dev/null 2>&1; then
  sha256sum -c install.sh.sha256
else
  shasum -a 256 -c install.sh.sha256
fi
bash install.sh`,
    note: '开源、自托管、无需 Paperclip 账号。安装器会确保 Node.js ≥ 24.11，并在 ~/.paperclip/cli 下安装受控的 Paperclip CLI。',
  },
  {
    id: 'non-interactive',
    title: '非交互式安装',
    lang: 'bash',
    code: `curl -fsSL https://paperclip.ing/install.sh | bash -s -- --no-prompt --no-onboard
paperclipai onboard --yes`,
    note: '管道形式要求系统已具备受支持的 Node.js、npm 与 npx。',
  },
  {
    id: 'try',
    title: '不安装任何东西，先试用',
    lang: 'bash',
    code: `npx --registry https://registry.npmjs.org paperclipai onboard --yes`,
    note: '如果因私有 .npmrc 源报 E404，用上面的 --registry 显式指定公共源即可。',
  },
  {
    id: 'test-drive',
    title: '隔离的手动测试实例',
    lang: 'bash',
    code: `ANTHROPIC_API_KEY=... npx paperclipai test-drive
OPENAI_API_KEY=... npx paperclipai test-drive --harness codex
OPENROUTER_API_KEY=... npx paperclipai test-drive \\
  --harness opencode \\
  --model openrouter/anthropic/claude-sonnet-4.5`,
    note: '始终前台运行，不安装服务、不创建首个任务；不加 --data-dir 时每次运行都有独立且保留的临时目录。',
  },
  {
    id: 'source',
    title: '从源码运行',
    lang: 'bash',
    code: `git clone https://github.com/paperclipai/paperclip.git
cd paperclip
pnpm install
pnpm dev`,
    note: 'API 服务启动在 http://localhost:3100，内置的 PostgreSQL 数据库会自动创建，无需任何配置。',
  },
  {
    id: 'bind',
    title: '切换到认证 / 私有模式',
    lang: 'bash',
    code: `paperclipai onboard --yes --bind lan
# 如需 Tailscale 私有网络，把 lan 换成 tailnet：
# paperclipai onboard --yes --bind tailnet`,
    note: '快速开始默认采用可信本地回环模式；显式选择绑定预设即可启用认证 / 私有模式。',
  },
] as const satisfies readonly Snippet[];

/** 环境要求 */
export const requirements = [
  { label: 'Node.js', value: '24.11+' },
  { label: '包管理器', value: 'pnpm 9.15+' },
  { label: '数据库', value: '内置 PostgreSQL' },
  { label: '开发端口', value: '3100 / 3101' },
] as const;

/** 排障：私有 npm 源导致 npx 解析到内网 registry 而报 E404 */
export const npmRegistryTip = {
  problem: '因为 paperclipai（或类似包）报 E404 而失败。',
  cause:
    '你通过全局 ~/.npmrc 使用了私有 npm 源（例如 GitHub Packages），npx 可能会把包解析到该私有源。',
  diagnose: 'npm config get registry',
  fix: 'npx --registry https://registry.npmjs.org paperclipai onboard --yes',
} as const;

/** 上游开发文档（站内补充入口） */
export const devResources = [
  { label: 'INSTALLING.md', hint: '锁定版本、canary、更新与回滚', href: links.installing },
  { label: 'DEVELOPING.md', hint: '完整开发指南', href: links.developing },
  { label: 'CLI.md', hint: 'CLI 参考与隔离测试实例', href: links.cli },
] as const;
