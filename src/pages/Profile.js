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

    console.log(showPrograms);

    const toggleUserInfo = () => {
        document.body.classList.toggle("user-info-open")
    }

    const onClickShowPrograms = () => {
        setShowPrograms(true);
        console.log("1")
    }

    const onClickShowDetail = () => {
        setShowPrograms(false);
        console.log("2")
    }

    return (
        <section id="profile">
            <ProfileNavigation showPrograms={onClickShowPrograms} showDetails={onClickShowDetail}/>
            <div className="container">
                <div className="profile__box">
                    <button className="profile__dashbord--button" onClick={toggleUserInfo}>
                        <FontAwesomeIcon className="profile__dashbord--icon" icon={faCaretRight} />
                    </button>
                    <UserInfo />
                    {
                        showPrograms ? (
                            <MyPrograms />
                        ) : (
                            <MyDetails />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Profile;