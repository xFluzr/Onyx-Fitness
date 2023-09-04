import React from "react";
import "../workouts/workoutsList.css"
import { Link } from "react-router-dom";

const WorkoutsList = ({workoutPrograms}) => {
    return (
        <div className="workout__list--box">
            <p className="workout__list--title">
                Workouts list:
            </p>
            <ul className="workout__list">
                {
                    workoutPrograms.map((workout,index) => {
                        return (
                            <li className="workout__list--element" key={index}>
                                <span className="list__element--number">{index + 1}</span>
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