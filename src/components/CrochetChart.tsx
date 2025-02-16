import { useState } from "react";
import { Stage, Layer } from "react-konva";
import StitchShape from "./StitchShape";
import { processRounds } from "../utils/charts/processRounds";
import { dummyProjects } from "../data/project";
import { Stitch } from "../types/Stitch.types";
import styles from "./CrochetChart.module.scss";

// useMemoでメモ化推奨？
// 二度手間だがRowsからStitchの2次元配列を生成する

// 将来これはpropsで受け取ってCrochetChartに渡す
const rowsData = dummyProjects[1].rows;

const newUnprocessedStitches: Stitch[][] = rowsData.map((row) => row.stitches);
const processedStitches = processRounds(newUnprocessedStitches);

const CrochetChart = () => {
  const [shapeSelectedState, setShapeSelectedState] = useState({
    index: 0,
    isSelected: false,
  });
  const judgeIsSelected = (index: number) =>
    shapeSelectedState.index === index && shapeSelectedState.isSelected;
  const handleColor = (index: number) => {
    if (judgeIsSelected(index)) {
      setShapeSelectedState({ index, isSelected: false });
      return;
    }
    setShapeSelectedState({ index, isSelected: true });
    return;
  };

  return (
    <div className={styles.chart}>
      <Stage width={400} height={300} offsetX={-200} offsetY={120} scaleY={-1}>
        <Layer>
          {processedStitches.map((round, roundIndex) =>
            round.map((stitch, stitchIndex) => (
              <StitchShape
                key={`${roundIndex}-${stitchIndex}`}
                type={stitch.type}
                x={stitch.x}
                y={stitch.y}
                rotation={stitch.rotation || 0}
                index={roundIndex * 1000 + stitchIndex} // ユニークなindexを生成
                judgeIsSelected={judgeIsSelected}
                handleColor={handleColor}
              />
            ))
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default CrochetChart;
