import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  color: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({
  color,
  onClick,
  children,
  disabled,
  width
}) => {
  const buttonClass = classNames([styles.buttonContainer],{
    [styles.buttonPrimary]: color === "primary",
    [styles.buttonSecondary]: color === "secondary",
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}  style={{ width: `${width}px` }}>
      {children}
    </button>
  );
};

export default Button;
