import React from "react";
import { Link } from "react-router-dom";

import "../pages/login.css";

import Girl from "../assets/login/girl.png"
import Logo from "../assets/logoname.svg";

const Login = () => {
    return (
       <section id="login">
            <div className="container">
                <div className="login__box">
                    <div className="login__form--background">
                        <div className="login__form--wrapper">
                            <div className="test_login">
                                Test account
                                <p>email: test@gmail.com</p>
                                <p>password: test123!</p>
                            </div>
                            <img src={Logo} className="login__logo" alt="Onyx fitness"/>
                            <p className="login__header">Log in</p>
                            <input className="login__input" type="text" placeholder="Email"/>
                            <input className="login__input" type="password" placeholder="Password"/>
                            <Link to="" className="login__password-recovery">Forgot password?</Link>
                            <Link to="" className="login__button">Log in</Link>
                            <Link to="" className="login__button-google">Log in with Google</Link>
                            <div className="login__no-account">
                                <p className="login__no-account--text">Don't have account?</p>
                                <Link to="/register" className="login__register">Register</Link>
                            </div>
                        </div>
                    </div>
                    <div className="login__img--box">
                        <figure className="login__img--wrapper">
                            <img className="login__img" src={Girl} alt="log in" loading="lazy"/>
                        </figure>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Login;