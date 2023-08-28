import React, {useState} from "react";
import "../profile/userInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { useUserAuth } from "../../context/UserAuthContext";

import Woman from "../../assets/profile/woman.png";
import Man from "../../assets/profile/man.png";
import UserDetail from "./UserDetail";

const UserInfo = () => {
    const { user } = useUserAuth();
    console.log("Zalogowany", user);
    const [gender, setGender] = useState("man")

    const toggleUserInfo = () => {
        document.body.classList.toggle("user-info-open")
    }

    return (
        <section id="user-info">
            <figure className="user-info__img--wrapper">
                <img className="user-info__img" 
                     src={gender === "man" ? Man : Woman} 
                     alt="profile" 
                />
            </figure>
            <div className="user-info__box">
                <p className="user-info__name">{ user.email.split("@").shift() }</p>
                <UserDetail detail="Age" value="22"/>
                <UserDetail detail="Height" value="188"/>
                <UserDetail detail="Weight" value="76"/>
            </div>
            <FontAwesomeIcon className="user-info__close--icon" icon={faXmark} onClick={toggleUserInfo}/>
        </section>
    )
}

export default UserInfo;