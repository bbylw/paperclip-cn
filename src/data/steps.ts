/** 三步上手流程 */
export interface Step {
  index: string;
  title: string;
  detail: string;
}

export const steps = [
  {
    index: '01',
    title: '定义目标',
    detail: '「打造排名第一的 AI 笔记应用，做到 100 万美元月经常性收入（MRR）。」',
  },
  {
    index: '02',
    title: '招募团队',
    detail: 'CEO、CTO、工程师、设计师、市场人员——任何机器人，任何供应商。',
  },
  {
    index: '03',
    title: '审批并运行',
    detail: '审视战略。设定预算。一键启动。在仪表盘上监控。',
  },
] as const satisfies readonly Step[];

/** 可接入的智能体运行时（展示用，非链接目标） */
export interface AgentRuntime {
  name: string;
  logo: string;
}

export const agentRuntimes = [
  { name: 'OpenClaw', logo: '/images/logos/openclaw.svg' },
  { name: 'Claude Code', logo: '/images/logos/claude.svg' },
  { name: 'Codex', logo: '/images/logos/codex.svg' },
  { name: 'Cursor', logo: '/images/logos/cursor.svg' },
  { name: 'Bash', logo: '/images/logos/bash.svg' },
  { name: 'HTTP', logo: '/images/logos/http.svg' },
] as const satisfies readonly AgentRuntime[];

/** 「适合你」的判断清单（markdown ** 强调） */
export const fitChecklist = [
  '你想构建**自主运转的 AI 组织**',
  '你在把**许多不同的智能体**（OpenClaw、Codex、Claude、Cursor）协调整合向同一个目标推进',
  '你同时开着 **20 个 Claude Code 终端**，已经搞不清各自在干什么',
  '你希望智能体**7×24 小时自主运行**，但仍想在需要时对工作做审计、随时插手',
  '你想**监控成本**并强制预算',
  '你想要一套管理智能体的流程，**用起来像任务管理器**',
  '你想**在手机上**管理这些自主运转的业务',
] as const;
