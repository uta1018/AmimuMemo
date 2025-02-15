import React from "react";
import classNames from "classnames";

interface ButtonProps {
  color: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color,
  onClick,
  children,
  disabled,
}) => {
  const buttonClass = classNames({
    "button--primary": color === "primary",
    "button--secondary": color === "secondary",
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
