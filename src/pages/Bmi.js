import React, { useEffect, useState } from "react";
import "../pages/bmi.css";
import GenderButton from "../components/bmi/GenderButton";
import BodyParameter from "../components/bmi/BodyParameter";
import BmiResult from "../components/bmi/BmiResult";

const Bmi = () => {
    const [gender, setGender] = useState(null);
    const [height, setHeight] = useState(175);
    const [weight, setWeight] = useState(70);
    const [bmi, setBmi] = useState(null);
    const [bmiName, setBmiName] = useState(null);

    const calculateBmi = () => {
        let bmiScore = (weight / Math.pow((height / 100),2)).toFixed(2);

        if(bmiScore <= 18.5){
            setBmi(bmiScore);
            setBmiName("UNDERWEIGHT");
        } else if(bmiScore > 18.5 && bmiScore <= 24.9) {
            setBmi(bmiScore);
            setBmiName("HEALTHY");
        } else if(bmiScore > 24.9 && bmiScore <= 29.9) {
            setBmi(bmiScore);
            setBmiName("OVERWEIGHT");
        } else if(bmiScore > 29.9 && bmiScore <=34.9) {
            setBmi(bmiScore);
            setBmiName("OBESE");
        } else {
            setBmi(bmiScore);
            setBmiName("EXTREMALY OBESE");
        }

        const resultBox = document.querySelector(".bmi__result--box");
        resultBox.classList.add("show-result");
    }

    useEffect(() => {
        const showButton = () => {
            const button = document.querySelector(".bmi__button");
            if(gender !== null){
                button.classList.add("button-show");
            }
        }

        showButton();
    },[gender])

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
                        <button className="bmi__button" onClick={calculateBmi}>
                            Calculate
                        </button>
                        <BmiResult bmi={bmi} bmiName={bmiName} />
                        <p className="section__text">
                            <span className="heading-pink">BMI (Body Mass Index)</span> is a numerical measure based on height and weight, used to assess if a person's weight is healthy or falls within underweight, normal, overweight, or obese categories.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bmi;