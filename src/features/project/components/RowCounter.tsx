import React from "react";

interface RowCounterProps {
  completedSteps: number;
  totalSteps: number;
  currentLanguage: "ja" | "en";
}

const RowCounter: React.FC<RowCounterProps> = ({
  completedSteps,
  totalSteps,
  currentLanguage,
}) => {
  return <div>{currentLanguage === "ja" ? <h3>{completedSteps} / {totalSteps}段</h3> : <h3>R{completedSteps} / R{totalSteps}</h3>}</div>;
};

export default RowCounter;
