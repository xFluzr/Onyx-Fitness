import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Girl from "../assets/login/girl.png"
import Logo from "../assets/logoname.svg";

const ResetPassword = () => {

    const { resetPassword } = useUserAuth();

    const [email, setEmail] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [succes, setSucces] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError(false);
        setLoading(true);
        if(email === null){
            setError("Email field cannot be empty.");
            setLoading(false);
            return;
        }
        try {
            await resetPassword(email);
            setSucces("We send email to your mailbox with reset password link.");
            setLoading(false);
        } catch {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <section id="login">
            <div className="container">
                <div className="login__box">
                    <div className="login__form--background">
                        <div className="login__form--wrapper">
                            <img src={Logo} className="login__logo" alt="Onyx fitness"/>
                            <p className="login__header">Reset Password</p>
                            {
                                error && <p className="login__error">{error}</p>
                            }
                            {
                               succes && <p className="login__error" style={{color: "green", textAlign: "center"}}>{succes}</p>
                            }
                            <input className="login__input" 
                                    type="email" 
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                            />
                            <Link to="/login" className="login__password-recovery">Back to log in</Link>
                            <button className="login__button" onClick={handleResetPassword}>
                                {!loading ? "Reset" : <FontAwesomeIcon className="login__loading" icon={faSpinner} />}
                            </button>
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
    );
}

export default ResetPassword;
