import React from "react";
import styles from "./Overlay.module.scss";

interface OverlayProps {
  onClick?: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick}></div>;
};

export default Overlay;
