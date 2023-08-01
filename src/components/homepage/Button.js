import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ text, isBackground = true , link="#"}) => {
  return (
    <Link 
      to={link}  
      className={`${isBackground ? "background" : "no-background"} btn`}
    >
      {
        text
      }
    </Link>
  );
};

export default Button;