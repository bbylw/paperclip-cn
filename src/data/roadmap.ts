export type RoadmapStatus = 'done' | 'active' | 'planned';

export interface RoadmapItem {
  status: RoadmapStatus;
  label: string;
}

export const roadmap = [
  { status: 'done', label: '插件系统（例如新增知识库、自定义追踪、队列等）' },
  { status: 'done', label: '接入 OpenClaw / claw 风格的智能体员工' },
  { status: 'done', label: 'companies.sh——导入导出整个组织' },
  { status: 'done', label: '简易 AGENTS.md 配置' },
  { status: 'done', label: '技能管理器、技能工作室与技能商店' },
  { status: 'done', label: '定时例程' },
  { status: 'done', label: '更完善的预算' },
  { status: 'done', label: '智能体评审与审批' },
  { status: 'done', label: '多人类用户' },
  { status: 'done', label: '云端 / 沙箱智能体（e2b、Cloudflare、Daytona、Modal、Novita、自托管 Kubernetes）' },
  { status: 'done', label: '产物与工作成果' },
  { status: 'done', label: '深度规划（规划模式、带版本的计划、计划审批）' },
  { status: 'done', label: '强制结果（看门狗、恢复动作、复核关卡）' },
  { status: 'done', label: 'MCP 工具网关与应用（受治理的工具访问）' },
  { status: 'done', label: '带按智能体访问权限的密钥管理器' },
  { status: 'done', label: '活动日志与行为归因' },
  { status: 'done', label: '自愈运行与自动恢复' },
  { status: 'done', label: '智能体评估与反馈' },
  { status: 'active', label: '云端部署（多租户隔离与公司导入 / 导出已上线）' },
  { status: 'planned', label: '记忆 / 知识' },
  { status: 'planned', label: 'MAXIMIZER 模式' },
  { status: 'planned', label: '工作队列' },
  { status: 'planned', label: '自组织' },
  { status: 'planned', label: '自动组织学习' },
  { status: 'planned', label: 'CEO 聊天' },
  { status: 'planned', label: '桌面应用' },
  { status: 'planned', label: '自带工单系统（以 Asana / Linear / Jira 作为接入点）' },
  { status: 'planned', label: '关联应用（一键集成，例如 Vercel）' },
] as const satisfies readonly RoadmapItem[];

export const roadmapMeta = {
  done: { label: '已上线', mark: '✅' },
  active: { label: '进行中', mark: '🟡' },
  planned: { label: '规划中', mark: '⚪' },
} as const satisfies Record<RoadmapStatus, { label: string; mark: string }>;
