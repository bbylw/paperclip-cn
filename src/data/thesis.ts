/**
 * 首屏下沉的「定位说明」四条。
 * 从 Hero 移到这里：它们是解释性内容，不是价值主张，
 * 混在 Hero 里会把主标题挤成三行并让首屏溢出。
 */
export interface ThesisItem {
  label: string;
  detail: string;
}

export const thesis = [
  {
    label: '它是什么',
    detail: '一个 Node.js 服务端加 React 界面，用来编排一支 AI 智能体团队去经营业务。',
  },
  {
    label: '怎么用',
    detail: '自带你的智能体，分配目标，在一个仪表盘里跟踪工作进度与成本开销。',
  },
  {
    label: '部署形态',
    detail: '单进程控制平面，本地内置 PostgreSQL，任意模型 · 任意智能体。',
  },
  {
    label: '协议',
    detail: 'MIT 开源，可 fork、可自托管、可商用，无需 Paperclip 账号。',
  },
] as const satisfies readonly ThesisItem[];
