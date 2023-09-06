import React, { useState } from "react";
import "../workouts/workoutsList.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"

const WorkoutsList = ({workoutPrograms, setWorkoutIndex}) => {
    const [openList, setOpenList] = useState(false);

    const handleClick = () => {
        const listBox = document.querySelector(".workout__list--box");
        listBox.classList.toggle("open-workout__list");
        setOpenList(prev => !prev);
    }

    return (
        <div className="workout__list--box">
            <p className="workout__list--title">
                Workouts list: 
                <span className="workout__list--open-icon" onClick={handleClick}>
                    {openList ? <FontAwesomeIcon icon={faCaretUp} />: <FontAwesomeIcon icon={faCaretDown} /> }
                </span>
            </p>
            <ul className="workout__list">
                {
                    workoutPrograms.map((workout,index) => {
                        return (
                            <li className="workout__list--element" key={index} onClick={() => setWorkoutIndex(index)}>
                                <p className="list__element--name">{workout.workoutName}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="/profile" className="workout__list--button">Create new</Link>
        </div>
    )
}

export default WorkoutsList;