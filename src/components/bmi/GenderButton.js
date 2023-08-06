import React from "react";
import "../bmi/genderButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";

const GenderButton = ({gender, genderValue, onClick}) => {
    return (
        <button className="gender--button" onClick={onClick}>
            {
                gender === "man" ? (
                    <>
                        <FontAwesomeIcon 
                            icon={faMars} 
                            // jeśli ktoś zaznaczy mężczyznę to genderValue będzie przechowywać "man" i zostanie dodana klasa is-man która odpowiada za zmianą koloru buttona
                            className={`${genderValue === "man" ? "is-man" : "man"} gender--icon`}
                        />
                        <span className="bmi__text--second man-name">man</span>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon 
                            icon={faVenus} 
                            className={`${genderValue === "woman" ? "is-woman" : "woman"} gender--icon`}
                        />
                        <span className="bmi__text--second">woman</span>
                    </>
                )
            }
        </button>
    );
}

export default GenderButton;