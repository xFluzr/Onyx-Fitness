import React from "react";
import "../excercises/excerciseCard.css";
import { Link } from "react-router-dom";
import Dupa from "../../assets/coaches/face10.jpg";

const ExcerciseCard = ({img, alt, name, id, muscle}) => {
    return (
        <div className="excercise-card">
            <Link className="excercise-card__link" to={`/excercise/${id}`}>
                <figure className="excercise-card__img--wrapper">
                    <img className="excercise-card__img" 
                         src={img ? img : Dupa} 
                         alt={alt}
                    />
                </figure>
                <p className="excercise-card__name">
                    {name}
                </p>
                <p className="excercise-card__muscle">
                    Target: {muscle}
                </p>
            </Link>
        </div>
    );
}

export default ExcerciseCard;