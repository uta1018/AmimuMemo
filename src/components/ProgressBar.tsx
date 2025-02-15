// import classNames from "classnames";
import React from "react";

interface ProgressProps {
  progress: number;
  parents: "home-page" | "project-page";
}

const ProgressBar: React.FC<ProgressProps> = ({ progress }) => {
  // const progressBarClass = classNames({
  //   "progressbar--home-page": parents === "home-page",
  //   "progressbar--project-page": parents === "project-page",
  // });

  return (
    <div>
      <p>{progress}%</p>
      <div>
        {/* 進捗バー */}
        <div></div>
      </div>
    </div>
  );
};

export default ProgressBar;
