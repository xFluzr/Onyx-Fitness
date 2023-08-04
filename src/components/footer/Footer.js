import React from "react";
import "../footer/footer.css";
import Logo from "../../assets/logoname.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__top">
                        <figure className="footer__img--wrapper">
                            <Link className="footer__img--link" to="/">
                                <img src={Logo} className="footer__img" alt="Onyx Fitness" />
                            </Link>
                        </figure>
                        <ul className="footer__list">
                            <li className="footer__list--element">
                                <Link to="/excercises" className="footer__list--link">
                                    Excercises
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="/pricing" className="footer__list--link">
                                    Pricing
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="/bmi" className="footer__list--link">
                                    Bmi
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="/contact" className="footer__list--link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <ul className="footer__list list2">
                            <li className="footer__list--element">
                                <Link to="/about" className="footer__list--link">
                                    About us
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="/workouts" className="footer__list--link">
                                    Workouts
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="/login" className="footer__list--link">
                                    Log in
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="/gallery" className="footer__list--link">
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                        <div className="footer__icons">
                            <FontAwesomeIcon className="footer__social-icon not-allowed" icon={faInstagram} />
                            <FontAwesomeIcon className="footer__social-icon not-allowed" icon={faTwitter} />
                            <FontAwesomeIcon className="footer__social-icon not-allowed" icon={faFacebook} />
                            <FontAwesomeIcon className="footer__social-icon not-allowed" icon={faTiktok} />
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p className="footer__text">
                            This is not a real gym website.
                        </p>
                        <p className="footer__text">
                            Created only for learning purposes.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;