import React, { useState } from "react";
import "../pages/bmi.css";
import GenderButton from "../components/bmi/GenderButton";
import BodyParameter from "../components/bmi/BodyParameter";

const Bmi = () => {
    const [gender, setGender] = useState(null);
    const [height, setHeight] = useState(175);
    const [weight, setWeight] = useState(70);

    console.log(gender);

    return (
        <section id="bmi">
            <div className="container">
                <div className="bmi__box">
                    <h1 className="section__title heading-pink">
                        BMI
                    </h1>
                    <div className="bmi__calculator">
                        <p className="bmi__text">Calculate body mass index</p>
                        <div className="bmi__gender--wrapper">
                            <GenderButton 
                                gender="woman" 
                                genderValue={gender} 
                                onClick={() => setGender("woman")}
                            />
                            <GenderButton 
                                gender="man" 
                                genderValue={gender} 
                                onClick={() => setGender("man")}
                            />
                        </div>
                        <div className="bmi__data--wrapper">
                            <BodyParameter 
                                name="height (cm)"
                                value={height}
                                min={100}
                                max={230}
                                onChange={(e => setHeight(e.target.value))}
                            />
                            <BodyParameter 
                                name="weight (kg)"
                                value={weight}
                                min={20}
                                max={200}
                                onChange={(e => setWeight(e.target.value))}
                            />
                        </div>
                        <button className="bmi__button">
                            Calculate
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bmi;