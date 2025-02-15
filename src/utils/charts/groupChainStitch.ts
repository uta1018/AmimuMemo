import { GroupedStitch, StitchInChart } from "../../types/Stitch.types";

export const groupChainStitch = (
  stitches: StitchInChart[]
): GroupedStitch[] => {
  const groupedStitches: GroupedStitch[] = [];
  let currentStitch: StitchInChart | null = null;
  let count = 0;

  stitches.forEach((stitch, index) => {
    if (stitch.type === currentStitch?.type && stitch.type === "chain") {
      count++;
      // 最終目
      if (index === stitches.length - 1 && currentStitch) {
        groupedStitches.push({
          ...currentStitch,
          chainCount: count,
        });
      }
    } else if (stitch.type === "chain") {
      // 1個目の鎖編み
      currentStitch = stitch;
      count = 1;
      // 最終目
      if (index === stitches.length - 1 && currentStitch) {
        groupedStitches.push({
          ...currentStitch,
          chainCount: count,
        });
      }
    } else if (currentStitch) {
      // 鎖編みの連続の次のstitch
      groupedStitches.push(
        {
          ...currentStitch,
          chainCount: count,
        },
        stitch
      );
      currentStitch = null;
      count = 0;
    } else {
      // 鎖編みと関係ないstitch
      currentStitch = null;
      count = 0;
      groupedStitches.push(stitch);
    }
  });

  return groupedStitches;
};
