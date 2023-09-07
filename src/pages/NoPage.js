import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Img404 from "../assets/404.png";
import "../pages/noPage.css";

const NoPage = () => {
    return (
        <section id="no-page">
            <div className="container">
                <div className="no-page__box">
                    <div className="no-page__text--wrapper">
                        <p className="no-page__text text-big">Ooops...</p>
                        <h1 className="no-page__text">Page is Not Found</h1>
                        <Link to="/" className="btn background">
                            <FontAwesomeIcon className="no-page__btn--icon" icon={faArrowLeft} />
                            Back to Homepage
                        </Link>
                    </div>
                    <div className="no-page__img--wrapper">
                        <figure className="no-page__img--cls">
                            <img className="no-page__img" src={Img404} alt="404 page not found" loading="lazy"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoPage;