import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ text, isBackground = true , link="#", allowed=""}) => {
  return (
    <Link 
      to={link}  
      className={`${isBackground ? "background" : "no-background"} btn ${allowed}`}
    >
      {
        text
      }
    </Link>
  );
};

export default Button;