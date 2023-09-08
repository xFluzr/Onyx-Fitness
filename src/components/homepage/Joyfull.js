import React from "react";
import FitnessCard from "./FitnessCard";
import Button from "./Button";
import "./joyfull.css";

import Img1 from "../../assets/joyfull/yoga1.jpg";
import Img2 from "../../assets/joyfull/yoga2.jpg";
import Img3 from "../../assets/joyfull/yoga3.jpg";

import icon1 from "../../assets/svgicons/kwiat1.svg";
import icon2 from "../../assets/svgicons/kwiat2.svg";
import icon3 from "../../assets/svgicons/kwiat3.svg";

const Joyfull = () => {
    return (
        <section id="joyfull">
            <div className="container">
                <div className="joyfull__box">
                    <h2 className="section__title">
                        <span className="heading-pink">A joyfull investment in your</span>
                        <br />
                        Body, Mind and Spirit
                    </h2>
                    <p className="section__text">
                        Find professional and well prepared class that fits you best.
                    </p>
                    <div className="joyfull__cards">
                        <FitnessCard 
                            category="Yoga"
                            title="Yoga spine relief"
                            level="Beginner"
                            img={Img1}
                            icon={icon1}
                        />
                        <FitnessCard 
                            category="Strength"
                            title="Steel core"
                            level="Advanced"
                            img={Img2}
                            icon={icon3} 
                        />
                        <FitnessCard 
                            category="Body"
                            title="Breath control"
                            level="Beginner"
                            img={Img3}
                            icon={icon2}
                        />
                    </div>
                    <Button 
                        allowed="not-allowed"
                        text="See all Courses"
                        link="#"
                    />
                </div>
            </div>
        </section>
    )
}

export default Joyfull;