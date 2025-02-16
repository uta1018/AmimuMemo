import { Stitch } from "./Stitch.types";

// これはfirebaseで使うかも
export type Project = {
  id: string;
  author: string;
  title: string;
  createdAt: string; // 作成日
  updatedAt: Date;
  rows?: Row[];
};

export type Language = "en" | "ja";

export type Row = {
  stitches: Stitch[];
};

export type ConvertedStitch = Stitch & {
  count: number;
};

export type ConvertedRow = {
  stitches: ConvertedStitch[];
};
