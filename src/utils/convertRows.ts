export interface Stitch {
  stitchType: string;
  isCompleted: boolean;
  comment?: string;
  markerColor?: string;
  isMarked: boolean;
  isInProgress: boolean;
  isSelected: boolean;
}

export interface Row {
  stitches: Stitch[];
}

export interface ConvertedStitch {
  stitchType: string;
  isCompleted: boolean;
  comment?: string;
  markerColor?: string;
  isMarked: boolean;
  count: number;
  // 追加: グループ内のいずれかが編み途中または選択中ならtrue
  isInProgress: boolean;
  isSelected: boolean;
}

export interface ConvertedRow {
  stitches: ConvertedStitch[];
}

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
        stitch.stitchType === currentStitch.stitchType &&
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
            stitchType: currentStitch.stitchType,
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
          stitchType: currentStitch.stitchType,
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
      { stitchType: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "chain", isCompleted: true, isMarked: false, isInProgress: false,  isSelected: false },
      { stitchType: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "halfDouble", isCompleted: true, isMarked: false,  isInProgress: false, isSelected: false },
      { stitchType: "halfDouble", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "slip", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false }
    ],
  },
  {
    stitches: [
      { stitchType: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "chain", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "chain", isCompleted: true, isMarked: false, isInProgress: false,  isSelected: false },
      { stitchType: "double", isCompleted: true, isMarked: true, isInProgress: false, isSelected: false, comment: "マーカー付ける"},
      { stitchType: "double", isCompleted: true, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "halfDouble", isCompleted: false, isMarked: false,  isInProgress: true, isSelected: false },
      { stitchType: "halfDouble", isCompleted: false, isMarked: false, isInProgress: true, isSelected: false },
      { stitchType: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "double", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false },
      { stitchType: "slip", isCompleted: false, isMarked: false, isInProgress: false, isSelected: false }
    ],
  },
  // 他の段も同様に追加可能
];



