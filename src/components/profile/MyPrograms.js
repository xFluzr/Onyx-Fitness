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
        let deletedWorkout = [...workoutPrograms];
        deletedWorkout.splice(workoutIndex,1);
        setWorkoutPrograms(deletedWorkout);
    }

    const handleWorkoutNameChange = (e, workoutIndex) => {
        const {name, value} = e.target;
        let tempWorkouts = [...workoutPrograms]; // kopiuje wszytkie treningi
        tempWorkouts[workoutIndex][name] = value; // modyfikuje daną w treningu o konkretnym indeksie i nazwie pobieranej z inputa
        setWorkoutPrograms(tempWorkouts);
    }

    const handleAddExcercise = (workoutIndex) => {
        let tempWorkout = [...workoutPrograms]; // kopiuje wszystkie treningi
        // console.log(tempWorkout[workoutIndex]);
        tempWorkout[workoutIndex].excercises.push(excerciseTemplate); // do treningu o określonym indeksie dodaje na koniec obiekt reprezentujący ćwiczenie
        setWorkoutPrograms(tempWorkout);
    }

    const handleExcerciseDelete = () => {

    }

    const handleExcerciseChange = () => {
        
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
                                        {workout.excercises.map((excercise, index) => {
                                            return (
                                                <div className="workout__excercise" key={index}>
                                                    <input name="exName" type="text" value={excercise.exName} onChange={(e) => handleExcerciseChange(e, index)} />
                                                    <input name="reps" type="number" value={excercise.reps} onChange={(e) => handleExcerciseChange(e, index)} />
                                                    <input name="weight" type="number" value={excercise.weight} onChange={(e) => handleExcerciseChange(e, index)} />
                                                    <button className="workout__delete--small" onClick={handleExcerciseDelete}>DELETE</button>
                                                </div>  
                                            )
                                        })}
                                    </div>
                                    <button className="workout__add" onClick={() => handleAddExcercise(workoutIndex)}>Add excercise</button>
                                    <button className="workout__delete" onClick={() => handleDeleteWorkout(workoutIndex)}>Delete workout</button>
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