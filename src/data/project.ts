// src/data/works.ts
export interface Project {
  id: string;
  author: string;
  title: string;
  createdAt: string; // 作成日
  updatedAt: Date;
}

interface Row {
  stitches: Stitch[];        // この行の目（Stitch）の配列
}

export type Language = "en" | "ja";

interface Stitch {
  stitchType: "slip" | "chain" | "single" | "double" | "treble" | string;  // 目の種類
  isCompleted: boolean;      // この目が完了しているか
  isMarked: boolean;         // ユーザーがマークしたかどうか
  comment?: string;             // コメント
  markerColor?: string;      // メモの色（任意）
  rowId: number;             // 目が所属する行のID
}

export const dummyProjects: Project[] = [
  {
    id: "1",
    author: "uuu",
    title: "ハートのモチーフ",
    createdAt: "2025-02-01",
    updatedAt: new Date("2025-02-01"),
    // rows: [
    //   // 1段目
    //   {
    //     stitches: [
    //       {
    //         stitchType: "chain",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "chain",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "chain",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "double",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "double",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "halfDouble",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "halfDouble",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "double",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         stitchType: "double",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //     ]
    //   },
    //   // 2段目
    //   {
    //     stitches: [
    //       {
    //         stitchType: "single",
    //         isCompleted: true,
    //         isMarked: false,
    //         comment: "",
    //         rowId: 2
    //       },
    //       {
    //         stitchType: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         stitchType: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         stitchType: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         stitchType: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         stitchType: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         stitchType: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         stitchType: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //     ]
    //   },
    //   {
    //     stitches: [
    //       {
    //         stitchType: "slip",
    //         isCompleted: true,
    //         isMarked: false,
    //         comment: "輪に引き抜き編み",
    //         rowId: 2
    //       },
    //     ]
    //   },
    // ]
  },{
    id: "2",
    author: "uuu",
    title: "ニット帽",
    createdAt: "2025-02-01",
    updatedAt: new Date("2025-02-01"),
  }
];
