import React from "react";
import "./fitnessCard.css";

const FitnessCard = (props) => {
    return (
        <div className="fitness-card">
            <div className="fitness-card__top">
                <span className="fitness-card__category">
                    {
                        props.category
                    }
                </span>
                <span className="fitness-card__level">
                    {
                        props.level
                    }
                </span>
            </div>
            <h3 className="fitness-card__title">
                {
                    props.title
                }
            </h3>
            <div className="fitness-card__middle">
               <span className="fitness-card__register">
                    Register
               </span>
               <img src={props.icon} className="fitness-card__icon" alt="icon" />
            </div>
            <figure className="fitness-card__img--wrapper">
                <img src={props.img} alt="Yoga classes" className="fitness-card__img" />
            </figure>
        </div>
    )
}

export default FitnessCard;