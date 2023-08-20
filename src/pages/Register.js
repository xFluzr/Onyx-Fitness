import React from "react";
import { Link } from "react-router-dom";
import "../pages/register.css"

import Girl from "../assets/login/girl.png"
import Logo from "../assets/logoname.svg";

const Register = () => {
    return (
        <section id="register">
            <div className="container">
                <div className="register__box">
                    <div className="register__form--background">
                        <div className="register__form--wrapper">
                            <img src={Logo} className="register__logo" alt="Onyx fitness"/>
                            <p className="register__header">Register</p>
                            <input className="register__email" type="text" placeholder="Name"/>
                            <input className="register__email" type="text" placeholder="Email"/>
                            <input className="register__email" type="text" placeholder="Password"/>
                            <input className="register__password" type="password" placeholder="Comfirm password"/>
                            <Link to="" className="register__button">Register</Link>
                            <div className="register__no-account">
                                <p className="register__no-account--text">Do you have account?</p>
                                <Link to="/login" className="register__login">Log in</Link>
                            </div>
                        </div>
                    </div>
                    <div className="register__img--box">
                        <figure className="register__img--wrapper">
                            <img className="register__img" src={Girl} alt="log in" loading="lazy"/>
                        </figure>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Register;