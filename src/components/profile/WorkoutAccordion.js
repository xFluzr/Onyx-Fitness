import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../profile/workoutAccordion.css";

const WorkoutAccordion = ({workout, workoutIndex, handleDeleteWorkout, handleWorkoutNameChange, handleAddExcercise, handleExcerciseDelete, handleExcerciseChange, handleUpdateWorkout }) => {

    const toggleWorkout = (workoutIndex) => {
        const workoutBox = document.getElementsByClassName("workout");
        workoutBox[workoutIndex].classList.toggle("show-workout");
    }

    const navigateToWorkouts = useNavigate();

    return (
        <div className="workout" key={workoutIndex}>
            <div className='workout__label' onClick={() => toggleWorkout(workoutIndex)}>
                <span className='workout__index'>
                    {workoutIndex + 1}
                </span>
                <span className='workout__name'>
                    {workout.workoutName}
                </span>
            </div>
            <div className="workout__body">
                <button className='workout__viev' onClick={() => navigateToWorkouts("/workouts")}>view workout</button>
                <div className='workout__input-name--box'>
                    <label className='workout__name--label'>Workout name:</label>
                    <input className="workout__name--input" name="workoutName" type="text" value={workout.workoutName} onChange={(e) => handleWorkoutNameChange(e, workoutIndex)} />
                </div>
                <div className='excercises__labels--box'>
                    <span className="excercise__label--primary">Excercise name</span>
                    <div className='excercise__labels--holder'>
                        <span className="excercise__label">Sets</span>
                        <span className="excercise__label">Reps</span>
                        <span className="excercise__label">Weights</span>
                    </div>
                    <div className='excercise__placeholder'></div>
                </div>
                {workout.excercises.map((excercise, excerciseIndex) => {
                    return (
                        <div className="workout__excercise" key={excerciseIndex}>
                            <input className='workout__input--primary' name="exName" type="text" value={excercise.exName} onChange={(e) => handleExcerciseChange(workoutIndex, excerciseIndex, e)} />
                            <div className='excercise__input--box'>
                                <input className='workout__input' name="sets" type="number" value={excercise.sets} onChange={(e) => handleExcerciseChange(workoutIndex, excerciseIndex, e)} />
                                <input className='workout__input' name="reps" type="number" value={excercise.reps} onChange={(e) => handleExcerciseChange(workoutIndex, excerciseIndex, e)} />
                                <input className='workout__input' name="weight" type="number" value={excercise.weight} onChange={(e) => handleExcerciseChange(workoutIndex, excerciseIndex, e)} />
                            </div>
                            <button className="workout__delete--small" onClick={() => handleExcerciseDelete(workoutIndex, excerciseIndex)}>X</button>
                        </div>
                    )
                })}
                <div className='workout__button--wrapper'>
                    <button className="workout__add" onClick={() => handleAddExcercise(workoutIndex)}>Add excercise</button>
                    <button className="workout__delete" onClick={() => handleDeleteWorkout(workoutIndex)}>Delete workout</button>
                    <button className="workout__update" onClick={handleUpdateWorkout}>Save workout</button>
                </div>
            </div>
        </div>
    );
}

export default WorkoutAccordion;
