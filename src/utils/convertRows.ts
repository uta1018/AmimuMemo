// import StitchComponent from "../features/project/components/Stitch";
import { ConvertedRow, ConvertedStitch, Row } from "../types/Project.types";
import { Stitch } from "../types/Stitch.types";

export function convertRows(rows: Row[]): ConvertedRow[] {
  return rows.map((row) => {
    const convertedStitches: ConvertedStitch[] = [];
    let currentStitch: Stitch | null = null;
    let count = 0;
    let groupInProgress = false;
    let groupSelected = false;

    row.stitches.forEach((stitch, index) => {
      // グループ化する条件：stitchType が同じで、かつマーカーが付いていない
      if (
        currentStitch &&
        stitch.type === currentStitch.type &&
        !stitch.isMarked &&
        !currentStitch.isMarked
      ) {
        count++;
        // グループ内に1つでも編み途中や選択中があればtrueにする
        groupInProgress = groupInProgress || !!stitch.isInProgress;
        groupSelected = groupSelected || !!stitch.isSelected;
      } else {
        // 前のグループがあれば保存
        if (currentStitch) {
          convertedStitches.push({
            type: currentStitch.type,
            isCompleted: currentStitch.isCompleted,
            comment: currentStitch.comment,
            markerColor: currentStitch.markerColor,
            count: count,
            isMarked: currentStitch.isMarked,
            isInProgress: groupInProgress,
            isSelected: groupSelected,
          });
        }
        // 新しいグループの開始
        currentStitch = stitch;
        count = 1;
        groupInProgress = !!stitch.isInProgress;
        groupSelected = !!stitch.isSelected;
      }

      // 最後の目を処理
      if (index === row.stitches.length - 1 && currentStitch) {
        convertedStitches.push({
          type: currentStitch.type,
          isCompleted: currentStitch.isCompleted,
          comment: currentStitch.comment,
          markerColor: currentStitch.markerColor,
          count: count,
          isMarked: currentStitch.isMarked,
          isInProgress: groupInProgress,
          isSelected: groupSelected,
        });
      }
    });

    return { stitches: convertedStitches };
  });
}

// export const rows: Row[] = [
  
//   {
//     stitches: [
//       { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "chain", isCompleted: true, isMarked: false, isInProgress: false,  isSelected: false },
//       { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "halfDouble", isCompleted: true, isMarked: false,  isInProgress: false, isSelected: false },
//       { type: "halfDouble", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "slip", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false }
//     ],
//   },
//   {
//     stitches: [
//       { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "chain", isCompleted: true, isMarked: false, isInProgress: false,  isSelected: false },
//       { type: "double", isCompleted: true, isMarked: true, isInProgress: false, isSelected: false, comment: "マーカー付ける"},
//       { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "halfDouble", isCompleted: false, isMarked: false,  isInProgress: true, isSelected: false },
//       { type: "halfDouble", isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
//       { type: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
//       { type: "slip", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false }
//     ],
//   },
//   // 他の段も同様に追加可能
// ];

export const rows: Row[] = [
  {stitches: [
    { type: "magicRing", index: 0, x: 0, y: 0, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false }
  ]},
  {stitches: [
    { type: "chain", index: 0, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 1, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 2, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 3, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 4, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "halfDouble", index: 5, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "halfDouble", index: 6, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "halfDouble", index: 7, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 8, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "halfDouble", index: 9, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "halfDouble", index: 10, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "halfDouble", index: 11, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 12, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 13, isCompleted: true, isMarked: false, isInProgress: false, isSelected: false }
  ]},
  {stitches:[
    { type: "inc", index: 0, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 1, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 2, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 3, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 4, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 5, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 6, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "double", index: 7, isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
    { type: "double", index: 8, relativeTo: 7, isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
    { type: "inc", index: 9, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 10, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 11, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 12, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 13, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
    { type: "inc", index: 14, isCompleted: false, isMarked: false, isInProgress: true, isSelected: false }
  ]},
];
