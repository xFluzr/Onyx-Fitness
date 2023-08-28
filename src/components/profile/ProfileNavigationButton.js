import React from "react";
import "../profile/profileNavigationButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const ProfileNavigationButton = ({name, onclick}) => {
    return (
        <button className="profile-navigation__button" onClick={onclick}>
            <span className="profile-navigation__button--text">{name}</span>
            <FontAwesomeIcon className="profile-navigation__button--icon" icon={faCaretRight} />
        </button>
    )
}

export default ProfileNavigationButton;