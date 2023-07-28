import React from "react";
import "./button.css";

const Button = ({ type, text, isBackground = true ,link="#",additionalClasses=""}) => {
  return (
    <>
    <a href={link}>
      <button
      type={type}
      className={`${isBackground ? "background" : "no-background"} btn ${additionalClasses} `}
      >
      {text}
      </button>
    </a>
    </>
   
  );
};

export default Button;
