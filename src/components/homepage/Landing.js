import React from "react";
import "./landing.css";
import Button from "./Button";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="landing__box">
          <div className="landing-context">
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
              <Button text="Get Started" link="/login" />
              <Button text="Read More" isBackground={false} link="/about" />
            </div>
          </div>
          <div className="landing__image--wrapper"></div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
