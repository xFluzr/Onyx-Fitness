import React from "react";
import "../workouts/workoutContent.css";

const WorkoutContent = ({workout, workoutIndex}) => {
    return (
        <div className="workout-content__box">
            <div className="workout-content">
                <div className="workout-content__header">
                    <span className="workout-content__number">
                        {workoutIndex}
                    </span>
                    <p className="workout-content__name">
                        {workout.workoutName}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkoutContent;