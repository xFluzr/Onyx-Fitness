import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

import "../pages/register.css"

import Girl from "../assets/login/girl.png"
import Logo from "../assets/logoname.svg";

const Register = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [comfirmPassword, setComfirmPassword] = useState(null);
    const { signUp } = useUserAuth();

    const [error, setError] = useState(null);

    const navigateToLogin = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            await signUp(email, password);
            navigateToLogin("/login");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <section id="register">
            <div className="container">
                <div className="register__box">
                    <div className="register__form--background">
                        <div className="register__form--wrapper">
                            <img src={Logo} className="register__logo" alt="Onyx fitness"/>
                            <p className="register__header">Register</p>
                            {
                                error && <p>{error}</p> 
                            }
                            <form onSubmit={handleSubmit}>
                                <input className="register__input" 
                                       type="text" 
                                       placeholder="Email"
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                />
                                <input className="register__input" 
                                       type="password" 
                                       placeholder="Password"
                                       onChange={(e) => setPassword(e.target.value)}
                                       required
                                />
                                <input className="register__input" 
                                       type="password" 
                                       placeholder="Comfirm password"
                                       onChange={(e) => setComfirmPassword(e.target.value)}
                                       required
                                />
                                <button to="" className="register__button" type="submit">Register</button>
                            </form>
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