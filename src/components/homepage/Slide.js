import React from "react";
import "../../components/homepage/slide.css";
import { Link } from "react-router-dom";

const Slide = (props) => {
    return (
        <div className="slide">
            <Link to={`/coach/${props.link}`} className="slide__link">
                <figure className="slide__img--wrapper">
                    <img 
                        className="slide__img"
                        src={props.image} 
                        alt={props.name}
                    />
                </figure>
                <p className="slide__name">
                    {props.name}
                </p>
                <p className="slide__discipline">
                    {props.discipline}
                </p>
            </Link>
        </div>
    );
}

export default Slide;