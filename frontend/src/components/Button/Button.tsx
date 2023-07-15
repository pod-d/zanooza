import React, { ReactNode } from "react";

interface ButtonProps {
  name: string;
  icon?: ReactNode;
  color: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ name, color, style, icon }) => {
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
    <button style={buttonStyle}>
      {name}
      {icon}
    </button>
  );
};

export default Button;
