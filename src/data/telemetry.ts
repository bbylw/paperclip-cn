/** 遥测关闭方式（默认开启，四种方式任选其一） */
export const telemetryOptOut = [
  { method: '环境变量', how: 'PAPERCLIP_TELEMETRY_DISABLED=1' },
  { method: '通用约定', how: 'DO_NOT_TRACK=1' },
  { method: 'CI 环境', how: '当 CI=true 时自动关闭' },
  { method: '配置文件', how: '在你的 Paperclip 配置中设置 telemetry.enabled: false' },
] as const;
