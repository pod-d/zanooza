import React from 'react'

interface ButtonProps {
  name: string;
    color: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ name, color, style }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        border: 'none',
        cursor: "pointer",
        ...style
    };

    return (
        <button style={buttonStyle}>
            {name}
        </button>
    );
};

export default Button