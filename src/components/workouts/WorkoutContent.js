import React from "react";
import "../workouts/workoutContent.css";
import ExcerciseData from "./ExcerciseData";

const WorkoutContent = ({workout, workoutIndex}) => {
    return (
        <div className="workout-content__box">
            <div className="workout-content">
                <div className="workout-content__header">
                    <span className="workout-content__number">
                        {workoutIndex + 1}
                    </span>
                    <p className="workout-content__name">
                        {workout.workoutName}
                    </p>
                </div>
                <div className="workout-content__body">
                    {
                        workout.excercises.map((excercise, index) => {
                            return (
                                <div className="workout-content__excercise--box" key={index}>
                                    <div className="workout-content__excercise">
                                        <div className="excercise__name--box">
                                            <p className="workout-content__excercise--label">
                                                Excercise {index + 1}
                                            </p>
                                            <p className="workout-content__excercise--name">
                                                {excercise.exName}
                                            </p>
                                        </div>
                                        <div className="excercise__data--box">
                                            <ExcerciseData value={excercise.sets} label="Sets" />
                                            <ExcerciseData value={excercise.reps} label="Reps" />
                                            <ExcerciseData value={excercise.weight} label="Weights" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkoutContent;