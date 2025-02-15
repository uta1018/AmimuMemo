import React from "react";
import { useNavigate } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";

const HomeButton: React.FC = () => {
  const navigate = useNavigate();

  // ホームページに戻る処理
  const goToHomePage = () => {
    navigate("/"); 
  };

  return (
    <div onClick={goToHomePage}>
      <GrFormPrevious />
    </div>
  );
};

export default HomeButton;
