import { StitchInChart } from "../../types/Stitch.types";
import { getRotation } from "./getRotation";

export const processRounds = (rounds: StitchInChart[][]) => {
  const MARGIN = 5;
  const MAGIC_RING_RADIUS = typeToHeight["magicRing"];

  // 最初の要素のtypeが"magicRing"であるかをチェック
  if (rounds[0][0].type !== "magicRing") {
    console.error(
      'The first element of the first round must be of type "magicRing".'
    );
  }

  // 処理後の rounds を格納する配列
  const processedRounds: StitchInChart[][] = [];
  // magicRingを格納
  processedRounds[0] = rounds[0];

  const rotation = getRotation(rounds[1]);

  // 最初の round の各オブジェクトに初期値を付与
  processedRounds[1] = rounds[1]
    .map((stitch) => ({
      ...stitch,
      height: typeToHeight[stitch.type] || 0,
      rotation: (stitch.index ?? 0) * rotation,
    }))
    .map((stitch) => ({
      ...stitch,
      x:
        (MAGIC_RING_RADIUS + MARGIN) *
        Math.cos(((stitch.rotation + 90) * Math.PI) / 180),
      y:
        (MAGIC_RING_RADIUS + MARGIN) *
        Math.sin(((stitch.rotation + 90) * Math.PI) / 180),
    }));

  // 2回目以降の round を順次処理
  for (let i = 2; i < rounds.length; i++) {
    // 前の round の処理済みデータ
    const prevRound: StitchInChart[] = processedRounds[i - 1];
    // 現在の round を処理
    processedRounds[i] = rounds[i].map((stitch) => {
      const sourceIndex = (stitch.relativeTo || stitch.index) ?? 0;
      const prevStitch: StitchInChart = prevRound[sourceIndex];

      return {
        ...stitch,
        height: typeToHeight[stitch.type] || 0,
        rotation: prevStitch.rotation,
        x:
          (prevStitch.x ?? 0) +
          ((prevStitch.height ?? 0) + MARGIN) *
            Math.cos((((prevStitch.rotation ?? 0) + 90) * Math.PI) / 180),
        y:
          (prevStitch.y ?? 0) +
          ((prevStitch.height ?? 0) + MARGIN) *
            Math.sin((((prevStitch.rotation ?? 0) + 90) * Math.PI) / 180),
      };
    });
  }
  return processedRounds;
};

const typeToHeight: Record<string, number> = {
  magicRing: 30,
  chain: 20,
  inc: 20,
  dec: 20,
  single: 20,
  halfDouble: 30,
  double: 40,
  treble: 50,
  slip: 0,
};
