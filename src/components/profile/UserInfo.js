import React, {useState} from "react";
import "../profile/userInfo.css";

import Woman from "../../assets/profile/woman.png";
import Man from "../../assets/profile/man.png";
import UserDetail from "./UserDetail";

const UserInfo = () => {
    const [gender, setGender] = useState("man")
    return (
        <section id="user-info">
            <figure className="user-info__img--wrapper">
                <img className="user-info__img" 
                     src={gender === "man" ? Man : Woman} 
                     alt="profile photo" 
                />
            </figure>
            <p className="user-info__name">Jan Dzban</p>
            <UserDetail detail="Age" value="22"/>
            <UserDetail detail="Height" value="188"/>
            <UserDetail detail="Weight" value="76"/>
        </section>
    )
}

export default UserInfo;