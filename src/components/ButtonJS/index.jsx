import React from "react";

// JSX-based Button component
const ButtonJS = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonJS;
