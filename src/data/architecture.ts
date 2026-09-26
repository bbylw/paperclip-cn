/** 控制平面子系统（对应架构图 3 × 4 网格），保留英文术语并补充中文说明 */
export interface ServerModule {
  en: string;
  zh: string;
}

export const serverModules = [
  { en: 'Identity & Access', zh: '身份与访问' },
  { en: 'Work & Tasks', zh: '工作与任务' },
  { en: 'Heartbeat Execution', zh: '心跳执行' },
  { en: 'Governance & Approvals', zh: '治理与审批' },
  { en: 'Org Chart & Agents', zh: '组织架构图与智能体' },
  { en: 'Workspaces & Runtime', zh: '工作区与运行时' },
  { en: 'Plugins', zh: '插件' },
  { en: 'Budget & Costs', zh: '预算与成本' },
  { en: 'Routines & Schedules', zh: '例程与排程' },
  { en: 'Secrets & Storage', zh: '密钥与存储' },
  { en: 'Activity & Events', zh: '活动与事件' },
  { en: 'Company Portability', zh: '公司可移植性' },
] as const satisfies readonly ServerModule[];

/** 架构图下方的智能体接入方式（客户端运行时） */
export interface ClientRuntime {
  en: string;
  zh: string;
}

export const clientRuntimes = [
  { en: 'Claude Code', zh: '编码智能体' },
  { en: 'Codex', zh: '编码智能体' },
  { en: 'CLI agents', zh: '命令行智能体' },
  { en: 'HTTP / web bots', zh: 'HTTP / Webhook 机器人' },
] as const satisfies readonly ClientRuntime[];

/** 各子系统说明 */
export const subsystems = [
  {
    title: '身份与访问',
    detail:
      '两种部署模式（可信本地或认证模式）、董事会用户、智能体 API 密钥、短时效运行 JWT、公司成员关系、邀请流程，以及 OpenClaw 引导入驻。每个变更类请求都能追溯到具体执行者。',
  },
  {
    title: '组织架构图与智能体',
    detail:
      '智能体拥有角色、头衔、汇报关系、权限与预算。适配器示例与图中对应：Claude Code、Codex、CLI 类智能体（如 Cursor/Gemini/bash）、HTTP/Webhook 类机器人（如 OpenClaw），以及外部适配器插件。只要能接收心跳信号，就算被录用。',
  },
  {
    title: '工作与任务系统',
    detail:
      '事项携带公司 / 项目 / 目标 / 父级链接，原子化签出并加执行锁，一等公民级别的阻塞依赖、评论、文档、附件、工作产物、标签与收件箱状态。不重复劳动，不丢失上下文。',
  },
  {
    title: '心跳执行',
    detail:
      '基于数据库的唤醒队列，支持合并、预算检查、工作区解析、密钥注入、技能加载与适配器调用。运行过程产出结构化日志、成本事件、会话状态与审计轨迹。恢复流程会自动处理孤儿运行。',
  },
  {
    title: '工作区与运行时',
    detail:
      '项目工作区、隔离的执行工作区（git worktree、操作员分支），以及运行时服务（开发服务器、预览 URL）。智能体每次都在正确的目录、带着正确的上下文工作。',
  },
  {
    title: '治理与审批',
    detail:
      '董事会审批工作流、带复核 / 审批阶段的执行策略、决策追踪、预算硬上限、智能体暂停 / 恢复 / 终止，以及完整的审计日志。没有你的签字，什么都不会上线。',
  },
  {
    title: '预算与成本管控',
    detail:
      '按公司、智能体、项目、目标、事项、供应商与模型统计 token 与成本。带作用域的预算策略，含预警阈值与硬上限。超额时自动暂停智能体并取消排队中的工作。',
  },
  {
    title: '例程与排程',
    detail:
      '用 cron、Webhook 与 API 触发的周期性任务。含并发与补跑策略。每次例程执行都会生成一条被追踪的事项，并唤醒指派的智能体——无需手动启动。',
  },
  {
    title: '插件',
    detail:
      '全局插件系统，含进程外 worker、能力门控的主机服务、任务调度、工具暴露与 UI 贡献。无需 fork 即可扩展 Paperclip。',
  },
  {
    title: '密钥与存储',
    detail:
      '实例级与公司级密钥、加密的本地存储、供应商托管的对象存储、附件与工作产物。敏感值不会进入 prompt，除非某次作用域内的运行明确需要。',
  },
  {
    title: '活动与事件',
    detail:
      '变更类操作、心跳状态变化、成本事件、审批、评论与工作产物都会记录为持久化活动，方便运维人员审计发生了什么、为什么发生。',
  },
  {
    title: '公司可移植性',
    detail:
      '导出并导入整个组织——智能体、技能、项目、例程与事项——自动脱敏密钥并处理命名冲突。一次部署，多家公司，数据完全隔离。',
  },
] as const;
