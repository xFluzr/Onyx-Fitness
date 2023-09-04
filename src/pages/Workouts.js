import React, { useState } from "react";
import WorkoutContent from "../components/workouts/WorkoutContent";
import WorkoutsList from "../components/workouts/WorkoutsList";
import "./workouts.css";

const Workouts = () => {

    const [workoutPrograms, setWorkoutPrograms] = useState([{"workoutName":"Planche","excercises":[{"exName":"Full planche hold","sets":"3","reps":"1","weight":"0"},{"exName":"HSPU","sets":"5","reps":"2","weight":"0"},{"exName":"Planche na gumie","sets":"3","reps":"1","weight":"0"},{"exName":"Dipy","sets":"5","reps":"5","weight":"25"}]},{"workoutName":"Front","excercises":[{"exName":"Front","sets":"3","reps":"10","weight":"0"},{"exName":"Przysiady","sets":"2","reps":"3","weight":"23"},{"exName":"Brzuszki","sets":1,"reps":1,"weight":10}]},{"workoutName":"Nogi","excercises":[{"exName":"Excercise","sets":1,"reps":1,"weight":10},{"exName":"Biceps hantle","sets":"3","reps":"10","weight":"18"},{"exName":"Excercise","sets":1,"reps":1,"weight":10}]}])
    const [workoutIndex, setWorkoutIndex] = useState(1);

    return (
        <section id="workouts">
            <div className="container">
                <div className="workouts__box">
                    <h1 className="section__title">Your <span className="heading-pink">workout plans</span></h1>
                    <div className="workouts__layout">
                        <WorkoutsList workoutPrograms={workoutPrograms} />
                        <WorkoutContent workout={workoutPrograms[1]} workoutIndex={workoutIndex}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workouts;