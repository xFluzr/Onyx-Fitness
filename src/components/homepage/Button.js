import React from "react";
import "./button.css";

const Button = ({ type, text, isBackground = true }) => {
  return (
    <button
      type={type}
      className={`${isBackground ? "background" : "no-background"} btn`}
    >
      {text}
    </button>
  );
};

export default Button;
