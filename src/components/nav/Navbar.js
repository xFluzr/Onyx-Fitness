import React, { useEffect, useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import Logo from "../../assets/logoname.svg";

const Navbar = ({loggedIn}) => {

    //ilość przescrollowanej strony
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    //funkcja odpowiada za dodawanie i zabieranie kalsy otwierającej menu
    const toggleMobileMenu = () => {
        document.body.classList.toggle("menu-is-open");
    }

    useEffect(() => {
        //funkcja zmieniająca wysokość navbara w zależności w którą stronę jest scrollowana strona
        const handleScroll = () => {
            const navbar = document.querySelector("nav");
            const navbarPlaceholder = document.querySelector(".navbar__placeholder");
            
            setLastScrollPosition(window.scrollY);
            
            if(lastScrollPosition < window.scrollY){
                navbar.classList.add("navbar-small");
                navbarPlaceholder.classList.add("navbar-small");
            } else {
                navbar.classList.remove("navbar-small");
                navbarPlaceholder.classList.remove("navbar-small");
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        } 
    },[lastScrollPosition])

    return (
        <>
            <div className="navbar__placeholder"></div>
            <nav className="navbar">
                <div className="navbar__mobile">
                    <figure className="logo__box">
                        <Link className="logo__link" to="/">
                            <img className="logo" src={Logo} alt="Onyx fitness" />
                        </Link>
                    </figure>
                    <FontAwesomeIcon className="open-icon" icon={faBars} onClick={toggleMobileMenu}/>
                </div>
                <div className="navbar__wrapper">
                    <FontAwesomeIcon className="close-icon" icon={faXmark} onClick={toggleMobileMenu}/>
                    <figure className="logo__box">
                        <Link className="logo__link" to="/">
                            <img className="logo" src={Logo} alt="Onyx fitness" />
                        </Link>
                    </figure>
                    <ul className="navbar__list">
                        <li className="list--element">
                            <Link to="/bmi" className="list--link">
                                Bmi
                            </Link>
                        </li>
                        <li className="list--element">
                            <Link to="/excercises" className="list--link">
                                Excercises
                            </Link>
                        </li>
                        <li className="list--element">
                            <Link to={loggedIn ? "/workouts" : "/login"} className="list--link">
                                Workouts
                            </Link>
                        </li>
                        <li className="list--element">
                            <Link to="/about" className="list--link">
                                About us
                            </Link>
                        </li>
                        <li className="list--element">
                            <Link to="/gallery" className="list--link">
                                Gallery
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar__icon--wrapper">
                        <Link to={loggedIn ? "/profile" : "/login"} className="icon--link">
                            <FontAwesomeIcon className="navbar__icon" icon={faUser} />
                        </Link>
                        <Link to="/contact" className="icon--link">
                            <FontAwesomeIcon className="navbar__icon" icon={faPhone} />
                        </Link>
                        <Link to="/offer" className="navbar__button">
                            Buy Membership
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;