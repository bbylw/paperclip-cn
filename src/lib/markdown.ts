export interface Segment {
  text: string;
  strong: boolean;
}

/**
 * 极简的行内标记解析：仅支持 **粗体**，用于把 README 文案直接复用到页面。
 * 输入内容全部来自项目自有数据文件，不涉及用户输入。
 */
export function boldSegments(input: string): Segment[] {
  return input
    .split(/\*\*(.+?)\*\*/g)
    .filter((chunk) => chunk.length > 0)
    .map((chunk, index) => ({ text: chunk, strong: index % 2 === 1 }));
}
