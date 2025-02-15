import React, { useState } from "react";
import HomeButton from "../../components/HomeButton";
import PageTitle from "../../components/PageTitle";
import Menu from "./components/Menu";
import Chart from "../../components/Chart";
import Memo from "./components/Memo";
import RowCounter from "./components/RowCounter";
import ProgressBar from "../../components/ProgressBar";

const Project: React.FC = () => {
  const [isChartVisible, setIsChartVisible] = useState(true);
  const [isMemoVisible, setIsMemoVisible] = useState(false);

  const openMemo = () => {
    setIsMemoVisible(true);
  };

  const closeMemo = () => {
    setIsMemoVisible(false);
  };

  return (
    <>
      <header>
        <HomeButton />
        <PageTitle>ハートのモチーフ</PageTitle>
        <Menu isChartVisible={isChartVisible} openMemo={openMemo} />
      </header>
      {isChartVisible && <Chart />}
      <RowCounter completedSteps={1} totalSteps={2} currentLanguage="ja" />
      <ProgressBar progress={60} parents="project-page"/>

      {isMemoVisible && <Memo memo="かぎ針：6号" closeMemo={closeMemo} />}
    </>
  );
};

export default Project;
