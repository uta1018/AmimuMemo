import React from "react";
import { convertRows } from "../../../utils/convertRows";
import { Language, Row, ConvertedRow } from "../../../types/Project.types";
import Stitch from "./Stitch";

interface InstructionProps {
  rows: Row[];
  language: Language;
}

const Instruction: React.FC<InstructionProps> = ({ rows, language }) => {
  const convertedRows: ConvertedRow[] = convertRows(rows);

  return (
    <>
      {convertedRows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <p>
            {language === "ja" ? `${rowIndex + 1}段目` : `Row ${rowIndex + 1}`}
          </p>
          {row.stitches.map((stitch, index) => (
            <Stitch key={index} stitch={stitch} language={language} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Instruction;
