import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

// TSX-based Button component
const ButtonTS: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonTS;
