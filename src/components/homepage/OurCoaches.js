import React from "react";
import "../../components/homepage/ourCoaches.css";
import CoachSlider from "./CoachSlider";

const OurCoaches = () => {

  return (
    <section id="our-coaches">
      <div className="container">
        <div className="our-coaches__box">
          <h2 className="section__title">
            <span className="heading-pink">Our</span> Coaches
          </h2>
          <hr className="line" />
          <p className="section__text">
            Transform your fitness journey with expert guidance from dedicated personal trainers. Unlock your potential today!
          </p>
          <div className="slider__box">
            <CoachSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCoaches;