import React, { useState } from "react";
import "../pages/profile.css";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import MyPrograms from "../components/profile/MyPrograms";
import UserInfo from "../components/profile/UserInfo";
import MyDetails from "../components/profile/MyDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

const Profile = () => {
    const [showPrograms, setShowPrograms] = useState(true);
    const [userInfo, setUserInfo] = useState({
        nickName:"macius",
        age:20,
        weight:50,
        gender:"",
        height:150
    });
   
    const toggleUserInfo = () => {
        document.body.classList.toggle("user-info-open")
    }

   
   

    const onClickShowPrograms = () => {
        setShowPrograms(true);
    }

    const onClickShowDetail = () => {
        setShowPrograms(false);
    }

    return (
        <section id="profile">
            <ProfileNavigation onClickShowPrograms={onClickShowPrograms} onClickShowDetail={onClickShowDetail}/>
            <div className="container">
                <div className="profile__box">
                    <button className="profile__dashbord--button" onClick={toggleUserInfo}>
                        <FontAwesomeIcon className="profile__dashbord--icon" icon={faCaretRight} />
                    </button>
                    <UserInfo userInfo={userInfo} setUserInfo={setUserInfo}/>
                    {
                        showPrograms ? (
                            <MyPrograms />
                        ) : (
                            <MyDetails userInfo={userInfo} setUserInfo={setUserInfo}/>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Profile;