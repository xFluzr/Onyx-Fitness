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
                            <img src={Logo} className="footer__img" alt="Onyx Fitness" />
                        </figure>
                        <ul className="footer__list">
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    Excercises
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    Pricing
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    Bmi
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    About us
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    Workouts
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    Gallery
                                </Link>
                            </li>
                            <li className="footer__list--element">
                                <Link to="" className="footer__list--link">
                                    Log in
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__middle">
                        <FontAwesomeIcon className="coach__social-icon" icon={faInstagram} />
                        <FontAwesomeIcon className="coach__social-icon" icon={faTwitter} />
                        <FontAwesomeIcon className="coach__social-icon" icon={faFacebook} />
                        <FontAwesomeIcon className="coach__social-icon" icon={faTiktok} />
                    </div>
                    <div className="footer__bottom">
                        <p className="footer__text">
                            This is not a real website.
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