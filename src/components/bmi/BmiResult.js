import React from "react";
import "../bmi/bmiResult.css";

const BmiResult = ({bmi, bmiName}) => {
    return (
        <div className="bmi__result--box">
            <p className="bmi__result">
                Your BMI result:
                <span className="heading-pink"> {bmi}</span>
            </p>
            <p className="bmi__result--name">
                You are 
                <span className="heading-pink"> {bmiName}</span>
            </p>
            <p className="bmi__result--advice">
                Optimal bmi is 18,5 - 24,9.
            </p>
        </div>
    );
}

export default BmiResult;