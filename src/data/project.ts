// src/data/works.ts
import { Project } from "../types/Project.types";
import { unprocessedStitches } from "./chartData";

export const dummyProjects: Project[] = [
  {
    id: "1",
    author: "uuu",
    title: "ハートのモチーフ",
    createdAt: "2025-02-01",
    updatedAt: new Date("2025-02-01"),
    rows: []
    // rows: [
    //   // 1段目
    //   {
    //     stitches: [
    //       {
    //         type: "chain",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "chain",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "chain",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "double",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "double",
    //         isCompleted: true,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "halfDouble",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "halfDouble",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "double",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 1
    //       },
    //       {
    //         type: "double",
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
    //         type: "single",
    //         isCompleted: true,
    //         isMarked: false,
    //         comment: "",
    //         rowId: 2
    //       },
    //       {
    //         type: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         type: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         type: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         type: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         type: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         type: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //       {
    //         type: "single",
    //         isCompleted: false,
    //         isMarked: false,
    //         rowId: 2
    //       },
    //     ]
    //   },
    //   {
    //     stitches: [
    //       {
    //         type: "slip",
    //         isCompleted: true,
    //         isMarked: false,
    //         comment: "輪に引き抜き編み",
    //         rowId: 2
    //       },
    //     ]
    //   },
    // ]
  },
  {
    id: "2",
    author: "uuu",
    title: "ニット帽",
    createdAt: "2025-02-01",
    updatedAt: new Date("2025-02-01"),
    rows: unprocessedStitches.map((round) => {
      return { stitches: round };
    }),
  },
];
