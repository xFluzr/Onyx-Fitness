import React from "react";
import "../pages/coach.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

import coachesData from "../utils/coachesData";

const Coach = () => {

    const { id } = useParams();

    // Searching in coaches data for exact coach with id from param
    const coach = coachesData.find((coach) => coach.link === id);

    return (
        <section id="coach">
            <div className="coach__header">
                <h1 className="section__title">
                    <span className="heading-pink">About</span> the Trainer
                </h1>
            </div>
            <div className="container">
                <div className="coach__box">
                    <figure className="coach__img--wrapper">
                        <img className="coach__img" src={coach.image} alt={coach.name} />
                    </figure>
                    <div className="coach-information">
                        <h2 className="coach__name">
                            {coach.name}
                        </h2>
                        <span className="coach__subtitle">
                            Trainer
                        </span>
                        <hr className="line" />
                        <span className="coach__discipline">
                            {coach.discipline}
                        </span>
                        <p className="section__text">
                            {coach.description}
                        </p>
                        <div className="coach__socials">
                            <FontAwesomeIcon className="coach__social-icon" icon={faInstagram} />
                            <FontAwesomeIcon className="coach__social-icon" icon={faTwitter} />
                            <FontAwesomeIcon className="coach__social-icon" icon={faFacebook} />
                            <FontAwesomeIcon className="coach__social-icon" icon={faTiktok} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Coach;