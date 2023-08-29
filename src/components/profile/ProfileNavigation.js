import React from "react";
import { useNavigate } from "react-router-dom";
import "../profile/profileNavigation.css";
import ProfileNavigationButton from "./ProfileNavigationButton";
import { useUserAuth } from "../../context/UserAuthContext";

const ProfileNavigation = () => {
    const { logOut } = useUserAuth();

    const navigateToLogin = useNavigate();

    const handleLogOut = async () => {
        try{
            await logOut();
            navigateToLogin("/login");
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        <div id="profile-nav">
            <div className="container">
                <div className="profile-nav__buttons">
                    <ProfileNavigationButton name="my programs"/>
                    <ProfileNavigationButton name="my detail"/>
                    <ProfileNavigationButton name="logout" onclick={handleLogOut}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileNavigation;