export const STITCH_TYPE_KEYS = [
  "magicRing",
  "chain",
  "inc",
  "dec",
  "single",
  "halfDouble",
  "double",
  "treble",
  "slip",
] as const;

//鎖編み除いて作画用
export type StitchInChart = {
  type: (typeof STITCH_TYPE_KEYS)[number];
  index?: number;
  x?: number;
  y?: number;
  r?: number;
  label?: string;
  rotation?: number;
  height?: number;
  relativeTo?: number;
};

// フォーマットから鎖編みまとめる用（いつかなくなるかも？）
export type GroupedStitch = StitchInChart & {
  chainCount?: number;
};

// firebase用
// countはfirebaseに含める？
export type Stitch = GroupedStitch & {
  isCompleted: boolean;
  comment?: string;
  markerColor?: string;
  isMarked: boolean;
  isInProgress: boolean;
  isSelected: boolean;
};

// StitchShapePropsは要検討→作画でも他のプロパティを受け取る必要があるのかどうか
