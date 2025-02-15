import { StitchInApp } from "./Stitch.types";

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
  stitches: StitchInApp[];
};

export type ConvertedStitch = StitchInApp & {
  count: number;
};

export type ConvertedRow = {
  stitches: ConvertedStitch[];
};
