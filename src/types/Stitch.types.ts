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
  count?: number;
};

export type StitchInApp = {
  stitchType: string;
  isCompleted: boolean;
  comment?: string;
  markerColor?: string;
  isMarked: boolean;
  isInProgress: boolean;
  isSelected: boolean;
};

// firebase用
export type Stitch = GroupedStitch & Omit<StitchInApp, "stitchType">;

export type StitchShapeProps = {
  type: StitchInChart["type"];
  x: StitchInChart["x"];
  y: StitchInChart["y"];
  rotation?: StitchInChart["rotation"];
  index: number;
  judgeIsSelected: (index: number) => boolean;
  handleColor: (index: number) => void;
};
