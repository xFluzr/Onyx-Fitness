import React, { useState } from "react";
import "../profile/myProgramsAndMyDetails.css";

const MyPrograms = () => {

    const [workoutPrograms, setWorkoutPrograms] = useState([])

    console.log("WorkoutPrograms", workoutPrograms);

    const excerciseTemplate = {
        exName: "",
        reps: 0,
        weight: 0 
    }

    const workoutTemplate = {
        workoutName: "New workout",
        excercises: [
            excerciseTemplate
        ]
    };

    const handleAddWorkout = () => {
        if(!workoutPrograms){
            setWorkoutPrograms(workoutTemplate);
        } else {
            setWorkoutPrograms(prevWorkoutPrograms => [...prevWorkoutPrograms, workoutTemplate])
        }
    }

    const handleDeleteWorkout = (workoutIndex) => {
        let tempWorkouts = [...workoutPrograms]; // kopiuje wszytkie treningi
        tempWorkouts.splice(workoutIndex,1); // usuwam jeden treningi od podanego indexu (workoutIndex)
        setWorkoutPrograms(tempWorkouts);
    }

    const handleWorkoutNameChange = (e, workoutIndex) => {
        const {name, value} = e.target;
        let tempWorkouts = [...workoutPrograms];
        tempWorkouts[workoutIndex][name] = value; // w treningu o konkretnym indexie (workoutIndex) zmieniam wartość (value) danej pobieranej z inputa (name)
        setWorkoutPrograms(tempWorkouts);
    }

    const handleAddExcercise = (workoutIndex) => {
        let tempWorkout = [...workoutPrograms];
        tempWorkout[workoutIndex].excercises.push(excerciseTemplate); // do treningu o określonym indeksie (workoutIndex) do tablicy z ćwiczeniami dodaje na koniec obiekt reprezentujący jedno ćwiczenie
        setWorkoutPrograms(tempWorkout);
    }

    const handleExcerciseDelete = (workoutIndex, excerciseIndex) => {
        let tempWorkout = [...workoutPrograms];
        tempWorkout[workoutIndex].excercises.splice(excerciseIndex,1); // wybieram trening o indeksie (workoutIndex) następnie z jego tablicy excercises usuwam jedno ćwiczenie od indexu(excerciseIndex)
        setWorkoutPrograms(tempWorkout);
    }

    const handleExcerciseChange = (workoutIndex, excerciseIndex, e) => {
        const {name, value} = e.target;
        let tempWorkout = [...workoutPrograms];
        tempWorkout[workoutIndex].excercises[excerciseIndex][name] = value; // wybieram trening o indexie (workoutIndex) nastpnie tablicę z ćwiczeniami (excercises) z niej konkretne ćwiczenie o indexie (excerciseIndex) i pole o nazwie z inputa (name) któremu ustawiam wartość (value)
        setWorkoutPrograms(tempWorkout);
    }

    const handleUpdateWorkout = () => {
        
    }

    return (
        <section id="my-programs">
            <div className="my-programs__header">
                <h1 className="my-programs__title">
                    Programs I have created
                </h1>
                <button className="my-programs__add" onClick={handleAddWorkout}>
                    new program +
                </button>
            </div>
            <div className="programs__box">
                {
                    workoutPrograms.length === 0 ? (
                        <p className="no-program">You have no saved workout program</p>
                    ) : (
                        workoutPrograms.map((workout, workoutIndex) => {
                            return (
                                <div className="workout" key={workoutIndex}>
                                    <span className="workout__name">
                                        {workout.workoutName}
                                        <input name="workoutName" type="text" value={workout.workoutName} onChange={(e) => handleWorkoutNameChange(e, workoutIndex)} />
                                    </span>
                                    <div className="workout__body">
                                        {workout.excercises.map((excercise, excerciseIndex) => {
                                            return (
                                                <div className="workout__excercise" key={excerciseIndex}>
                                                    <input name="exName" type="text" value={excercise.exName} onChange={(e) => handleExcerciseChange(workoutIndex, excerciseIndex, e)} />
                                                    <input name="reps" type="number" value={excercise.reps} onChange={(e) => handleExcerciseChange(workoutIndex, excerciseIndex, e)} />
                                                    <input name="weight" type="number" value={excercise.weight} onChange={(e) => handleExcerciseChange(workoutIndex, excerciseIndex, e)} />
                                                    <button className="workout__delete--small" onClick={() => handleExcerciseDelete(workoutIndex, excerciseIndex)}>DELETE</button>
                                                </div>  
                                            )
                                        })}
                                    </div>
                                    <button className="workout__add" onClick={() => handleAddExcercise(workoutIndex)}>Add excercise</button>
                                    <button className="workout__delete" onClick={() => handleDeleteWorkout(workoutIndex)}>Delete workout</button>
                                    <button className="workout__update" onClick={handleUpdateWorkout}>Save workout</button>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </section>
    )
}

export default MyPrograms;