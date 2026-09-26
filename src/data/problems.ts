/** 解决了哪些问题：之前 / 之后 */
export interface ProblemPair {
  before: string;
  after: string;
}

export const problems = [
  {
    before: '你开着 20 个 Claude Code 标签页，却分不清谁在干什么。一重启就全没了。',
    after: '任务以工单形式管理，对话按线程组织，会话在重启后依然保留。',
  },
  {
    before: '你得手动从好几个地方拼凑上下文，提醒你的机器人到底在干什么。',
    after: '上下文从任务向上贯通项目目标与公司目标——你的智能体始终清楚该做什么、为什么做。',
  },
  {
    before: '一堆智能体配置文件杂乱无章，你还在重复造任务管理、沟通与智能体间协作的轮子。',
    after:
      'Paperclip 开箱即用地提供组织架构图、工单、委派与治理——所以你经营的是一家公司，而不是一堆脚本。',
  },
  {
    before: '失控的循环白白烧掉几百美元的 token，额度还没反应过来就被打满。',
    after: '成本追踪让 token 预算一目了然，额度耗尽时自动节流。管理层用预算定优先级。',
  },
  {
    before: '你有周期性任务（客服、社媒、报表），还得记得手动启动它们。',
    after: '心跳机制按计划处理常规工作。管理层负责监督。',
  },
  {
    before: '你有个想法，得先找到仓库、启动 Claude Code、一直开着标签页、还得盯着它。',
    after: '在 Paperclip 里加个任务。你的编程智能体会一直干到做完。管理层验收成果。',
  },
] as const satisfies readonly ProblemPair[];

/** Paperclip 特别之处 */
export interface Differentiator {
  title: string;
  detail: string;
}

export const differentiators = [
  {
    title: '原子化执行。',
    detail: '任务签出与预算执行都是原子操作，因此不会重复劳动，也不会超额支出。',
  },
  {
    title: '持久的智能体状态。',
    detail: '智能体在多次心跳之间恢复同一份任务上下文，而不是每次从头开始。',
  },
  {
    title: '运行时技能注入。',
    detail: '智能体能在运行时学习 Paperclip 的工作流与项目上下文，无需重新训练。',
  },
  {
    title: '可回滚的治理。',
    detail: '审批关卡被强制生效，配置变更有版本记录，错误的变更可以安全回滚。',
  },
  {
    title: '目标感知执行。',
    detail: '任务携带完整的目标链路，智能体始终能看到「为什么」，而不只是一个标题。',
  },
  {
    title: '可移植的公司模板。',
    detail: '导出 / 导入组织、智能体与技能，自动脱敏密钥并处理命名冲突。',
  },
  {
    title: '真正的多组织隔离。',
    detail:
      '每个实体都按公司划分作用域，因此一次部署即可运行多家公司，各自数据与审计轨迹相互隔离。',
  },
] as const satisfies readonly Differentiator[];

/** Paperclip 不是什么 */
export const notAPillar = [
  { title: '不是聊天机器人。', detail: '智能体有岗位，没有聊天窗口。' },
  {
    title: '不是智能体框架。',
    detail: '我们不会告诉你怎么造智能体，而是告诉你怎么运营一家由智能体组成的公司。',
  },
  {
    title: '不是工作流搭建器。',
    detail: '没有拖拽式流水线。Paperclip 建模的是公司——有组织架构图、目标、预算与治理。',
  },
  {
    title: '不是提示词管理器。',
    detail: '智能体自带提示词、模型与运行时。Paperclip 管理的是它们所处的组织。',
  },
  {
    title: '不是单智能体工具。',
    detail:
      '这是为团队准备的。如果你只有一个智能体，大概不需要 Paperclip；如果你有二十个——那你一定需要。',
  },
  {
    title: '不是代码审查工具。',
    detail: 'Paperclip 编排的是工作，不是 pull request。审查流程请自带。',
  },
] as const;
