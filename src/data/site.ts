/**
 * 站点级元数据与导航配置
 * 所有文案均来自 Paperclip 项目 README（中文版）。
 */
export const site = {
  name: 'Paperclip',
  title: 'Paperclip —— 用来管理工作型 AI 智能体的应用',
  description:
    '开源的 AI 智能体团队协作编排工具。带上你的智能体，分配目标，在仪表盘里跟踪工作进度与成本开销。管理的是业务目标，而不是 pull request。',
  url: 'https://paperclip.ing',
  ogImage: '/images/og.jpg',
} as const;

export const links = {
  docs: 'https://docs.paperclip.ing',
  github: 'https://github.com/paperclipai/paperclip',
  install: 'https://paperclip.ing/install.sh',
  discord: 'https://discord.gg/m4HZY7xNG3',
  twitter: 'https://x.com/papercliping',
  website: 'https://paperclip.ing',
  license: 'https://github.com/paperclipai/paperclip/blob/master/LICENSE',
  contributing: 'https://github.com/paperclipai/paperclip/blob/master/CONTRIBUTING.md',
  roadmap: 'https://github.com/paperclipai/paperclip/blob/master/ROADMAP.md',
  developing: 'https://github.com/paperclipai/paperclip/blob/master/doc/DEVELOPING.md',
  installing: 'https://github.com/paperclipai/paperclip/blob/master/doc/INSTALLING.md',
  cli: 'https://github.com/paperclipai/paperclip/blob/master/doc/CLI.md',
  issues: 'https://github.com/paperclipai/paperclip/issues',
  discussions: 'https://github.com/paperclipai/paperclip/discussions',
  awesome: 'https://github.com/gsxdsm/awesome-paperclip',
  observability:
    'https://github.com/paperclipai/paperclip/blob/master/doc/observability.md',
  telemetryContract:
    'https://github.com/paperclipai/paperclip/blob/master/packages/shared/src/telemetry/README.md',
  telemetryWorkflow:
    'https://github.com/paperclipai/paperclip/blob/master/doc/TELEMETRY_WORKFLOW.md',
  demoVideo: 'https://github.com/user-attachments/assets/773bdfb2-6d1e-4e30-8c5f-3487d5b70c8f',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** 顶部导航（锚点指向页面内章节） */
export const navItems = [
  { label: '产品', href: '#pillars' },
  { label: '功能', href: '#features' },
  { label: '架构', href: '#architecture' },
  { label: '快速开始', href: '#quickstart' },
  { label: '路线图', href: '#roadmap' },
  { label: '常见问题', href: '#faq' },
] as const satisfies readonly NavItem[];
