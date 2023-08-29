import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../pages/register.css"

import Girl from "../assets/login/girl.png"
import Logo from "../assets/logoname.svg";

const Register = () => {
    const { signUp } = useUserAuth();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [comfirmPassword, setComfirmPassword] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigateToLogin = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setLoading(true);
        
        if(password !== comfirmPassword){
            setError("Passwords are not the same");
            setLoading(false);
            return;
        }

        try {
            await signUp(email, password);
            setLoading(false);
            navigateToLogin("/login");
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    const displayError = (error) => {
        if(error  === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
            return "Password should be at least 6 characters" ;
        } else if (error === "Firebase: Error (auth/email-already-in-use)."){
            return "This email is already registered, try to log in.";
        } else {
            return error;
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
                                error && <p className="register__error">{displayError(error)}</p>
                            }
                            <form onSubmit={handleSubmit}>
                                <input className="register__input" 
                                       type="email" 
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
                                <button className="register__button" type="submit">
                                    {!loading ? "Register" : <FontAwesomeIcon className="register__loading" icon={faSpinner} />}
                                </button>
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