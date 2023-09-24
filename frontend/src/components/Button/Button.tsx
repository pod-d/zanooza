import React, { ReactNode } from "react";

interface ButtonProps {
  name: string;
  icon?: ReactNode;
  color: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  name,
  color,
  style,
  icon,
  onClick,
  title,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    ...style,
  };

  return (
    <button style={buttonStyle} onClick={onClick} title={title}>
      {name}
      {icon}
    </button>
  );
};

export default Button;
