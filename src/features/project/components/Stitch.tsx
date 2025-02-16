// Stitch.tsx
import React from "react";
import { translateStitchType } from "../../../utils/translateStitch";
import { ConvertedStitch, Language } from "../../../types/Project.types";
import classNames from "classnames";
import styles from "./Stitch.module.scss";
import { FaStar } from "react-icons/fa6";

interface StitchProps {
  stitch: ConvertedStitch;
  language: Language;
}

const Stitch: React.FC<StitchProps> = ({ stitch, language }) => {
  const stitchClass = classNames({
    [styles.inProgressMarked]: stitch.isInProgress && stitch.isMarked,
    [styles.inProgress]: stitch.isInProgress, // 編み途中の場合
    [styles.selected]: stitch.isSelected, // 選択中の場合
    [styles.completedMarked]: stitch.isCompleted && stitch.isMarked,
    [styles.completed]: stitch.isCompleted,
    [styles.marked]: stitch.isMarked,
    [styles.stitch]: true,
  });

  return (
    <div className={stitchClass}>
      <p>
        {stitch.isMarked && <FaStar />}
        {language === "ja"
          ? `${translateStitchType(stitch.type, "ja")} ${stitch.count}目`
          : `${translateStitchType(stitch.type, "en")} ×${stitch.count}`}
      </p>
      {(stitch.isInProgress || stitch.isSelected) && stitch.isMarked && (
        <p className={styles.comment}>{stitch.comment}</p>
      )}
    </div>
  );
};

export default Stitch;
