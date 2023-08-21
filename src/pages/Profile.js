import React, { useState } from "react";
import "../pages/profile.css";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import MyPrograms from "../components/profile/MyPrograms";
import UserInfo from "../components/profile/UserInfo";

const Profile = () => {
    return (
        <section id="profile">
            <ProfileNavigation />
            <div className="container">
                <div className="profile__box">
                    <UserInfo />
                    <MyPrograms />
                </div>
            </div>
        </section>
    )
}

export default Profile;