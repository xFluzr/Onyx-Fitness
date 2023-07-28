import React from "react";
import "./landing.css";
import Button from "./Button";
import LandingImage from "../../assets/homepage/hp2.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="landing-content">
          <div className="landing-title">
            <h1>
              <span className="heading-pink">Body</span> and
              <span className="heading-pink"> Mind</span>
            </h1>
            <h2>in perfect balance</h2>
          </div>
          <p className="landing-text">
            Take care of your own body
            <br /> don't wait the perfect time to start is now
          </p>
          <div className="landing-action">
            <Button text="Get Started" type="button" isBackground={true} />
            <Button text="Read More" type="button" isBackground={false} />
          </div>
        </div>
        
          <img
            className="landing-image"
            src={LandingImage}
            alt="training-woman"
          />
          <a href="#our-approach" className="nav-arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        
      </div>
    </section>
  );
};

export default Landing;
