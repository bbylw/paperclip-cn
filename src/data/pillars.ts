/** 四大支柱 */
export interface Pillar {
  name: string;
  tagline: string;
  audience: string;
  covers: readonly string[];
  accent: 'brand' | 'mint' | 'sky' | 'violet';
}

export const pillars = [
  {
    name: '智能体任务管理器',
    tagline: '你声明意图，智能体去执行，你验收产出。',
    audience: '所有人，日常使用',
    covers: [
      '任务、审批与复核关卡',
      '主动协作的智能体同事',
      '可审计的例程与工作流',
      '通过 diff、截图与测试来验收',
    ],
    accent: 'brand',
  },
  {
    name: '智能体组织架构图',
    tagline: '为人与智能体设定角色、权限与边界。',
    audience: '管理者',
    covers: [
      '人 + 智能体混合的组织架构图',
      '职责、委派、专业化分工',
      '治理：谁能做什么',
      '作用域隔离的密钥与公司边界',
    ],
    accent: 'sky',
  },
  {
    name: '智能体员工培训',
    tagline: '设计、训练并评估你的 AI 员工。',
    audience: '赋能者',
    covers: [
      'Skill Studio 与全公司共享的技能',
      '评估与已保存的测试运行',
      '主动学习闭环与质量指标',
      '智能体的绩效评审',
    ],
    accent: 'violet',
  },
  {
    name: '智能体操作系统',
    tagline: '让工作真正跑起来的基础设施。',
    audience: 'IT 与平台',
    covers: [
      '跨供应商运行时：任意模型、任意智能体',
      '沙箱化、集成与 MCP 服务器',
      'SSO、GRC、RBAC 与成本管控',
      '数据隐私、内部链路追踪采集、数据价值复利',
    ],
    accent: 'mint',
  },
] as const satisfies readonly Pillar[];

/** 功能特性（3 × 3） */
export type FeatureIcon =
  | 'plug'
  | 'target'
  | 'heart'
  | 'coin'
  | 'building'
  | 'ticket'
  | 'shield'
  | 'org'
  | 'mobile';

export interface Feature {
  icon: FeatureIcon;
  title: string;
  detail: string;
}

export const features = [
  {
    icon: 'plug',
    title: '自带你的智能体',
    detail: '任意智能体、任意运行时，共用一张组织架构图。只要能接收心跳信号，就算被录用。',
  },
  {
    icon: 'target',
    title: '目标对齐',
    detail: '每个任务都能回溯到组织的使命。智能体清楚自己要做什么、为什么做。',
  },
  {
    icon: 'heart',
    title: '心跳机制',
    detail: '智能体按日程唤醒，检查工作并执行。委派关系在组织架构图中上下流转。',
  },
  {
    icon: 'coin',
    title: '成本管控',
    detail: '每个智能体有月度预算。一旦触顶就停止。杜绝失控开销。',
  },
  {
    icon: 'building',
    title: '多组织',
    detail: '一次部署，多个组织。数据完全隔离。一个控制平面统管你的业务组合。',
  },
  {
    icon: 'ticket',
    title: '工单系统',
    detail: '每次对话都可追溯。每项决策都有解释。完整的工具调用追踪与不可篡改的审计日志。',
  },
  {
    icon: 'shield',
    title: '治理',
    detail: '随时审批录用、推翻战略、暂停或终止任意智能体。',
  },
  {
    icon: 'org',
    title: '组织架构图',
    detail: '层级、角色、汇报关系。你的智能体有上级、有头衔、有岗位职责。',
  },
  {
    icon: 'mobile',
    title: '移动端就绪',
    detail: '随时随地监控并管理你的自主业务。',
  },
] as const satisfies readonly Feature[];
