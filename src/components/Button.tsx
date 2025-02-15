import React from "react";
import classNames from "classnames";

interface ButtonProps {
  color: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, onClick, children }) => {
  const buttonClass = classNames({
    "button--primary": color === "primary",
    "button--secondary": color === "secondary",
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
