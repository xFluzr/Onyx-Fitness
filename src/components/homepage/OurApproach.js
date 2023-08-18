import React from "react";
import Card from "./Card";
import "./ourapproach.css";

//IMAGES
import Workout from "../../assets/homepage/workout.svg";
import Equipment from "../../assets/homepage/equipment.svg";
import Support from "../../assets/homepage/support.svg";
import Nutrions from "../../assets/homepage/nutrions.svg";

const OurApproach = () => {
  return (
    <section id="our-approach">
      <div className="container">
        <h2 className="section__title">
          <span className="heading-pink">Our</span> Approach
        </h2>
        <p className="section__text">
          We are ready to provide personalized fitness plans and a supportive
          community to help you reach goals.
        </p>
        <div className="card-list">
          <Card
            title="Support"
            icon={Support}
            description="Our gym fosters a supportive community to help you achieve your fitness goals. Join us today!"
          />
          <Card
            title="Equipment"
            icon={Equipment}
            description="Achieve your best workout yet with our professional equipment. Designed to meet the needs of serious fitness enthusiasts."
          />
          <Card
            title="Nutrions"
            icon={Nutrions}
            description="Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
          />
          <Card
            title="Workout"
            icon={Workout}
            description="Certificate trainers will prepare the best optimized workout plan to meet your needs and unleash your potential."
          />
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
