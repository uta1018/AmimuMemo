import classNames from "classnames";
import React from "react";
import styles from "./ProgressBar.module.scss";

interface ProgressProps {
  progress: number;
  parents: "home-page" | "project-page";
}

const ProgressBar: React.FC<ProgressProps> = ({ progress, parents }) => {
  const progressBarClass = classNames([styles.progressbar], {
    [styles.progressbarHomePage]: parents === "home-page",
    [styles.progressbarProjectPage]: parents === "project-page",
  });

  // 0から100の範囲に収める
  const validProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={progressBarClass}>
      <p>
        {progress}
        <span>%</span>
      </p>
      <div className={styles.bar}>
        <div style={{ width: `${validProgress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
