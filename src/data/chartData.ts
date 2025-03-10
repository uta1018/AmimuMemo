import { Stitch, StitchInChart } from "../types/Stitch.types";

// ハートメモ
// 1．輪の作り目で編む
// 輪の作り目 を作る
// 立ち上がり（鎖編み3目）を編む
// 長編み を2目編む
// 中長編み を3目編む
// 長編み を1目編む（ここにマーカーをつける）
// 中長編み を3目編む
// 長編み を3目、さらに2目編む
// 鎖編み3目 → 引き抜き編み で輪を引き締める
// 2．細編みで増し目をする
// 立ち上がり1目 を編む
// すべての目に 細編みを2目ずつ 編む
// マーカーを付けた目だけ 長編みを2目 編む（ハートのとんがり部分）
// 引き抜き編み で2段目を完成させる

// const stitches: Stitch[] = [
//   // マジックリング（○）
//   { type: "magicRing", x: 0, y: 0, r: 30, label: "わ" },
//   // 鎖編み（○）
//   { type: "chain", x: 0, y: 30 },
//   { type: "chain", x: 0, y: 50 },
//   { type: "chain", x: 0, y: 70 },
//   { type: "double", x: -30, y: 0, rotation: 90 },
//   { type: "double", x: 30, y: 0, rotation: -90 },
//   { type: "halfDouble", x: 0, y: -30, rotation: 180 },
//   { type: "halfDouble", x: 0, y: -30, rotation: 180 },
//   { type: "halfDouble", x: 0, y: -30, rotation: 180 },
//   { type: "double", x: 30 / 1.414, y: 30 / 1.414, rotation: -45 },
//   { type: "double", x: 30 / 1.414, y: 30 / 1.414, rotation: -45 },
//   { type: "double", x: 30 / 1.414, y: 30 / 1.414, rotation: -45 },
//   { type: "double", x: 30 / 1.414, y: 30 / 1.414, rotation: -45 },
//   { type: "double", x: 30 / 1.414, y: 30 / 1.414, rotation: -45 },
//   { type: "chain", x: 0, y: 30 },
//   { type: "chain", x: 0, y: 50 },
//   { type: "chain", x: 0, y: 70 },

//   { type: "single", x: 90 / 1.414, y: -90 / 1.414, rotation: -135 },
//   { type: "single", x: -90 / 1.414, y: -90 / 1.414, rotation: 135 },
//   // 引き抜き編み（・）
//   { type: "slip", x: 0, y: -160 },
// ];

//作画に必要な最低限のプロパティ
const draftStitches: StitchInChart[][] = [
  [{ type: "magicRing", index: 0, x: 0, y: 0 }],
  [
    { type: "chain", index: 0 },
    { type: "double", index: 1 },
    { type: "double", index: 2 },
    { type: "double", index: 3 },
    { type: "double", index: 4 },
    { type: "halfDouble", index: 5 },
    { type: "halfDouble", index: 6 },
    { type: "halfDouble", index: 7 },
    { type: "double", index: 8 },
    { type: "halfDouble", index: 9 },
    { type: "halfDouble", index: 10 },
    { type: "halfDouble", index: 11 },
    { type: "double", index: 12 },
    { type: "double", index: 13 },
  ],
  [
    { type: "inc", index: 0 },
    { type: "inc", index: 1 },
    { type: "inc", index: 2 },
    { type: "inc", index: 3 },
    { type: "inc", index: 4 },
    { type: "inc", index: 5 },
    { type: "inc", index: 6 },
    { type: "double", index: 7 },
    { type: "double", index: 8, relativeTo: 7 },
    { type: "inc", index: 9 },
    { type: "inc", index: 10 },
    { type: "inc", index: 11 },
    { type: "inc", index: 12 },
    { type: "inc", index: 13 },
    { type: "inc", index: 14 },
  ],
  [
    { type: "double", index: 0, relativeTo: 7 },
    { type: "double", index: 1, relativeTo: 7 },
    { type: "double", index: 2, relativeTo: 7 },
  ],
];

export const unprocessedStitches: Stitch[][] = draftStitches.map(
  (round, roundIndex) => {
    return round.map((stitch) => {
      if (roundIndex === 0) {
        return {
          ...stitch,
          isCompleted: false,
          comment: "1段目です",
          markerColor: "#00FF00",
          isMarked: false,
          isInProgress: false,
          isSelected: false,
        };
      }
      return {
        ...stitch,
        isCompleted: false,
        comment: "",
        markerColor: "",
        isMarked: false,
        isInProgress: false,
        isSelected: false,
      };
    });
  }
);

// const stitches: Stitch[] = [
//   // マジックリング（○）
//   { type: "magicRing", x: 0, y: 0, r: 30, label: "わ" },
//   // 鎖編み（○）
//   { type: "chain", x: 0, y: 30 },
//   { type: "chain", x: 0, y: 50 },
//   { type: "chain", x: 0, y: 70 },
//   { type: "chain", x: 0, y: 90 },
//   { type: "chain", x: 0, y: 110 },
//   // 細編み（×）
//   { type: "single", x: 90 / 1.414, y: -90 / 1.414, rotation: -135 },
//   { type: "single", x: -90 / 1.414, y: -90 / 1.414, rotation: 135 },
//   // 増し目
//   { type: "inc", x: 80 / 1.414, y: 80 / 1.414, rotation: -45 },
//   { type: "inc", x: -80 / 1.414, y: 80 / 1.414, rotation: 45 },
//   // 減らし目
//   { type: "dec", x: 80, y: 0, rotation: -90 },
//   { type: "dec", x: -80, y: 0, rotation: 90 },
//   // 長編み（T）
//   { type: "halfDouble", x: 0, y: -30, rotation: 180 },
//   { type: "treble", x: 30 / 1.414, y: -30 / 1.414, rotation: -135 },
//   { type: "treble", x: -30 / 1.414, y: -30 / 1.414, rotation: 135 },
//   { type: "double", x: 30 / 1.414, y: 30 / 1.414, rotation: -45 },
//   { type: "double", x: -30, y: 0, rotation: 90 },
//   { type: "double", x: 30, y: 0, rotation: -90 },
//   { type: "double", x: -30 / 1.414, y: 30 / 1.414, rotation: 45 },
//   // 引き抜き編み（・）
//   { type: "slip", x: 0, y: -160 },
// ];
