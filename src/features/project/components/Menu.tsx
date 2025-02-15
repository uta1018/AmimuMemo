import React, { useState } from "react";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import Overlay from "../../../components/Overlay";
import { FaPen } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { CgArrowsExchange } from "react-icons/cg";
import { SlNote } from "react-icons/sl";
import { useParams } from "react-router-dom";
import styles from "./Menu.module.scss"

interface MenuProps {
  isChartVisible: boolean;
  openMemo: () => void;
}

const Menu: React.FC<MenuProps> = ({ isChartVisible, openMemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { projectId } = useParams<{ projectId: string }>();

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* メニューボタン */}
      <div onClick={openMenu} className={styles.menuButton}>
        <IoEllipsisHorizontalCircle />
      </div>

      {/* オーバーレイ */}
      {isOpen && < Overlay onClick={closeMenu} />}

      {/* メニュー */}
      {isOpen && (
        <div className={styles.menuContainer}
          style={{
            backgroundColor: "#fff",
            zIndex: 5,
          }}
        >
          <ul className={styles.menuList}>
            <li className={styles.edit}>
              <a href={`/edit-project/${projectId}`}>
                <p>作品の編集</p>
                <FaPen />
              </a>
            </li>
            {/* データベース書き換え */}
            {isChartVisible ? (
              <li>
                <a href={`/project/${projectId}`}>
                  <p>編み図の非表示</p>
                  <FaRegEyeSlash />
                </a>
              </li>
            ) : (
              <li>
                <a href={`/project/${projectId}`}>
                  <p>編み図の表示</p>
                  <FaRegEyeSlash />
                </a>
              </li>
            )}
            <li>
              <a href={`/project/${projectId}`}>
                <p>日↔英の切り替え</p>
                <IoLanguage />
              </a>
            </li>
            <li className={styles.countChange}>
              <a href={`/project/${projectId}`}>
                <p>カウント 行↔段切り替え</p>
                <CgArrowsExchange />
              </a>
            </li>
            <li
              onClick={() => {
                closeMenu();
                openMemo();
              }}
            >
              <a>
                <p>作品メモ</p>
                <SlNote />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
