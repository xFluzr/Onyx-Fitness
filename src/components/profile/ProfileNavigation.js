import React from "react";
import "../profile/profileNavigation.css";
import ProfileNavigationButton from "./ProfileNavigationButton";

const ProfileNavigation = () => {
    return (
        <div id="profile-nav">
            <div className="container">
                <div className="profile-nav__buttons">
                    <ProfileNavigationButton name="my programs"/>
                    <ProfileNavigationButton name="my detail"/>
                    <ProfileNavigationButton name="logout"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileNavigation;