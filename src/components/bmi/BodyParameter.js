import React from "react";
import "../bmi/bodyParameter.css";

const BodyParameter = (props) => {
    return (
        <div className="parameters__box">
            <p className="bmi__text--second">
                {props.name}
            </p>
            <input className="parameters__input" 
                type="number" 
                value={props.value}
                onChange={props.onChange}
            />
            <input className="parameters__range" 
                type="range" 
                min={props.min} 
                max={props.max}
                value={props.value} 
                step="1"
                onChange={props.onChange}
            />
        </div>
    );
}

export default BodyParameter;