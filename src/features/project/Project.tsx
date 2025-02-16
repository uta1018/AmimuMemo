import React, { useState } from "react";
import HomeButton from "../../components/HomeButton";
import PageTitle from "../../components/PageTitle";
import Menu from "./components/Menu";
import Chart from "../../components/Chart";
import Memo from "./components/Memo";
import RowCounter from "./components/RowCounter";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import Instruction from "./components/Instruction";
import { rows } from "../../utils/convertRows";
import { Language } from "../../data/project";
import styles from "./Project.module.scss";

const Project: React.FC = () => {
  const [isChartVisible, setIsChartVisible] = useState(true);
  const [isMemoVisible, setIsMemoVisible] = useState(false);
  const language: Language = "ja";

  const openMemo = () => {
    setIsMemoVisible(true);
  };

  const closeMemo = () => {
    setIsMemoVisible(false);
  };

  return (
    <div className={styles.projectContainer}>
      <header>
        <HomeButton />
        <PageTitle>ハートのモチーフ</PageTitle>
        <Menu isChartVisible={isChartVisible} openMemo={openMemo} />
      </header>
      {isChartVisible && <Chart />}
      <div className={styles.content}>
        <div className={styles.progress}>
          <RowCounter
            completedSteps={1}
            totalSteps={2}
            currentLanguage={language}
          />
          <ProgressBar progress={60} parents="project-page" />
        </div>
        <div className={styles.instructionContainer}>
          <Instruction rows={rows} language={language} />
        </div>
        <div className={styles.buttonContainer}>
          <Button color="secondary" width={120} onClick={() => {}}>
            DOWN
          </Button>
          <Button color="primary" width={200} onClick={() => {}}>
            UP
          </Button>
        </div>
      </div>

      {isMemoVisible && <Memo memo="かぎ針：6号" closeMemo={closeMemo} />}
    </div>
  );
};

export default Project;
