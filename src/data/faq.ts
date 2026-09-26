export interface FaqItem {
  question: string;
  /** 单段回答，或拆成多点列表（长答案用列表，避免 120 字一整段） */
  answer: string | readonly string[];
}

export const faqs = [
  {
    question: '典型的部署形态是怎样的？',
    answer: [
      '本地：单个 Node.js 进程管理内置的 Postgres 与本地文件存储。',
      '生产：把数据库指向你自己的 Postgres，按需自行部署。配置好项目、智能体与目标，其余的交给智能体。',
      '个人：独立开发者可以用 Tailscale 随时随地访问；等需要了，再部署到比如 Vercel 上。',
    ],
  },
  {
    question: '我能运营多家公司吗？',
    answer: '可以。一次部署即可运行数量不限的公司，且数据完全隔离。',
  },
  {
    question: 'Paperclip 与 OpenClaw、Claude Code 这类智能体有何不同？',
    answer:
      'Paperclip 是在「使用」那些智能体。它把它们编排成一家公司——有组织架构图、预算、目标、治理与问责机制。',
  },
  {
    question: '为什么要用 Paperclip，而不是直接把 OpenClaw 接上 Asana 或 Trello？',
    answer:
      '智能体编排在协调「谁签出了工作」「如何维持会话」「监控成本」「建立治理」这些事上有不少门道——这些 Paperclip 都替你做好了。（自带工单系统已在路线图中）',
  },
  {
    question: '智能体会持续运行吗？',
    answer:
      '默认情况下，智能体按既定心跳与基于事件的触发器（任务指派、@提及）运行。你也可以接入 OpenClaw 这类持续运行的智能体。智能体由你提供，Paperclip 负责协调。',
  },
] as const satisfies readonly FaqItem[];
