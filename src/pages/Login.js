import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "../pages/login.css";

import Girl from "../assets/login/girl.png"
import Logo from "../assets/logoname.svg";

const Login = () => {
    const { logIn, singInWithGoogle } = useUserAuth();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);

    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        try {
            await logIn(email, password);
            navigateTo("/profile")
            setLoading(false);
        } catch(error) {
            setError(error.message);
            setLoading(false);
        }
    }

    const handleSignInWithGoogle = async (e) => {
        e.preventDefault();
        setLoadingGoogle(true);
        try {
            await singInWithGoogle();
            navigateTo("/profile")
            setLoadingGoogle(false)
        } catch(error) {
            setError(error.message);
            setLoadingGoogle(false)
        }
    }

    const displayError = (error) => {
        if(error  === "Firebase: Error (auth/user-not-found)."){
            return "User not found, try to register your account." ;
        } else if (error === "Firebase: Error (auth/wrong-password)."){
            return "Wrong password, try again.";
        } else if (error === "Firebase: Error (auth/popup-closed-by-user)."){
            return "Google login cancelled by user.";
        } else {
            return error;
        }
    }

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
                            {
                                error && <p className="login__error">{displayError(error)}</p>
                            }
                            <form onSubmit={handleSubmit}>
                                <input className="login__input" 
                                       type="email" 
                                       placeholder="Email"
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                />
                                <input className="login__input" 
                                       type="password" 
                                       placeholder="Password"
                                       onChange={(e) => setPassword(e.target.value)}
                                       required
                                />
                                <Link to="/reset" className="login__password-recovery">Forgot password?</Link>
                                <button className="login__button" type="submit">
                                   {!loading ? "Log in" : <FontAwesomeIcon className="login__loading" icon={faSpinner} /> } 
                                </button>
                                <button className="login__button-google" onClick={handleSignInWithGoogle}>
                                    {!loadingGoogle ? "Log in with Google" : <FontAwesomeIcon className="login__loading" icon={faSpinner} />}
                                </button>
                            </form>
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