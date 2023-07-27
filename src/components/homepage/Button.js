import React from "react";
import "./button.css";

const Button = ({ type, text, isBackground = true ,link="#"}) => {
  return (
    <>
    <a href={link}>
      <button
      type={type}
      className={`${isBackground ? "background" : "no-background"} btn`}
      >
      {text}
      </button>
    </a>
    </>
   
  );
};

export default Button;
