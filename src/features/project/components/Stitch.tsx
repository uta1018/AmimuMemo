// Stitch.tsx
import React from "react";
import { translateStitchType } from "../../../utils/translateStitch";
import { ConvertedStitch, Language } from "../../../types/Project.types";
// import classNames from "classnames";

interface StitchProps {
  stitch: ConvertedStitch;
  language: Language;
}

const Stitch: React.FC<StitchProps> = ({ stitch, language }) => {
  // const stitchClass = classNames({
  //   stitch: true, // 常に適用されるクラス
  //   "in-progress": stitch.isInProgress, // 編み途中の場合
  //   selected: stitch.isSelected, // 選択中の場合
  //   completed: !stitch.isInProgress && !stitch.isSelected, // 編み終わりの場合
  // });

  return (
    <div>
      <p>
        {language === "ja"
          ? `${translateStitchType(stitch.stitchType, "ja")} ${stitch.count}目`
          : `${translateStitchType(stitch.stitchType, "en")} ×${stitch.count}`}
      </p>
      {(stitch.isInProgress || stitch.isSelected) && stitch.isMarked && (
        <p>{stitch.comment}</p>
      )}
    </div>
  );
};

export default Stitch;
