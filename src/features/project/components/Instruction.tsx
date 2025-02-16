import React, { useEffect, useRef } from "react";
import { ConvertedRow, convertRows, Row } from "../../../utils/convertRows";
import { translateStitchType } from "../../../utils/translateStitch";
import { Language } from "../../../data/project";
import Stitch from "./Stitch";
import styles from "./Instruction.module.scss";

interface InstructionProps {
  rows: Row[];
  language: Language;
}

const Instruction: React.FC<InstructionProps> = ({ rows, language }) => {
  const convertedRows: ConvertedRow[] = convertRows(rows);
  const inProgressRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inProgressRowRef.current) {
      inProgressRowRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div className={styles.instructionContainer}>
      {convertedRows.map((row, rowIndex) => {
        const hasInProgress = row.stitches.some(
          (stitch) => stitch.isInProgress
        );
        const hasCompleted = row.stitches.some((stitch) => stitch.isCompleted);
        const rowClassName = (hasInProgress || hasCompleted)
          ? styles.completedRow
          : styles.row;

        return (
          <div
            key={rowIndex}
            className={rowClassName}
            ref={hasInProgress ? inProgressRowRef : null}
          >
            <p>
              {language === "ja"
                ? `${rowIndex + 1}段目`
                : `Row ${rowIndex + 1}`}
            </p>
            <div className={styles.stitches}>
              {row.stitches.map((stitch, index) => (
                <Stitch stitch={stitch} language={language} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Instruction;
