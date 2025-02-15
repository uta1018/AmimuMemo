import { ConvertedRow, ConvertedStitch, Row } from "../types/Project.types";
import { StitchInApp } from "../types/Stitch.types";

export function convertRows(rows: Row[]): ConvertedRow[] {
  return rows.map((row) => {
    const convertedStitches: ConvertedStitch[] = [];
    let currentStitch: StitchInApp | null = null;
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

export const rows: Row[] = [
  {
    stitches: [
      { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { type: "chain", isCompleted: true, isMarked: false, isInProgress: true,  isSelected: false },
      { type: "double", isCompleted: true, isMarked: true, isInProgress: false, isSelected: true , comment: "マーカー付ける"},
      { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { type: "halfDouble", isCompleted: false, isMarked: true,  isInProgress: false, isSelected: false },
      { type: "halfDouble", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { type: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { type: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { type: "slip", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false }
    ],
  },
  {
    stitches: [
      { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { type: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { type: "chain", isCompleted: true, isMarked: false, isInProgress: true,  isSelected: false },
      { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: true },
      { type: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { type: "halfDouble", isCompleted: false, isMarked: true,  isInProgress: false, isSelected: false },
      { type: "halfDouble", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { type: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { type: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { type: "slip", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false }
    ],
  }
  // 他の段も同様に追加可能
];
