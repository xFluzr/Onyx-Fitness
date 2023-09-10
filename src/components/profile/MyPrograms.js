import React, { useState, useEffect } from "react";
import "../profile/myProgramsAndMyDetails.css";
import WorkoutAccordion from "./WorkoutAccordion";
import { db } from "../../firebase";
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";

const MyPrograms = () => {

    const [workoutPrograms, setWorkoutPrograms] = useState([]);
    const [userDatabaseDocId, setUserDatabaseDocId] = useState("");
    const [haveWorkoutsInDatabase, setHaveWorkoutsInDatabase] = useState(false);
    const { user } = useUserAuth(); 

    const workoutsCollectionRef = collection(db, "workoutplans");

    const excerciseTemplate = {
        exName: "Excercise",
        sets: 1,
        reps: 1,
        weight: 10 
    }

    const workoutTemplate = {
        workoutName: "New workout",
        excercises: [
            excerciseTemplate
        ]
    };

    useEffect(() => {
        // zapytanie do bazy szukające w kolekcji "workoutplans" pól "email" których wartość jest równa emailowi użytkownika;
        const workoutProgramsQuery = query(collection(db, "workoutplans"), where("email", "==", `${user.email}`));

        const getWorkoutPrograms = async () => {
            const data = await getDocs(workoutProgramsQuery);
            if(data.empty){
                console.log("No data for this user");
                return;
            } else {
                data.forEach((doc) => {
                        setWorkoutPrograms(JSON.parse(`${doc.data().workouts}`));
                        setUserDatabaseDocId(doc.id);
                    });
                setHaveWorkoutsInDatabase(true);
            }
        }

        getWorkoutPrograms();
    },[haveWorkoutsInDatabase])

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
        // saveChangesToDatabase();
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
        // sprawdzenie czy trening zawiera więcej niż jedno ćwiczenie przed usunięciem
        if(tempWorkout[workoutIndex].excercises.length > 1){
            tempWorkout[workoutIndex].excercises.splice(excerciseIndex,1); // wybieram trening o indeksie (workoutIndex) następnie z jego tablicy excercises usuwam jedno ćwiczenie od indexu(excerciseIndex)
            setWorkoutPrograms(tempWorkout);
        }
    }

    const handleExcerciseChange = (workoutIndex, excerciseIndex, e) => {
        const {name, value} = e.target;
        let maxThreeDigits = value.slice(0,3)
        let tempWorkout = [...workoutPrograms];
        tempWorkout[workoutIndex].excercises[excerciseIndex][name] = maxThreeDigits; // wybieram trening o indexie (workoutIndex) nastpnie tablicę z ćwiczeniami (excercises) z niej konkretne ćwiczenie o indexie (excerciseIndex) i pole o nazwie z inputa (name) któremu ustawiam wartość (value)
        setWorkoutPrograms(tempWorkout);
    }

    const saveChangesToDatabase = async () => {
        const userDoc = doc(db, "workoutplans", userDatabaseDocId);
        const stringifiedWorkouts = JSON.stringify(workoutPrograms);
        try {
            await updateDoc(userDoc, {workouts: stringifiedWorkouts});
        } catch(error) {
            console.log("Nie udało się zaktualizować treningów w bazie", error.message);
        }
    }

    const addWorkoutToDatabase = async () => {
        const stringifiedWorkouts = JSON.stringify(workoutPrograms);
        try{
            await addDoc(workoutsCollectionRef, {email: user.email, workouts: stringifiedWorkouts});
            setHaveWorkoutsInDatabase(true);
        } catch(error) {
            console.log("Nie działa dodawanie do bazy gdy nie ma treningów", error.message);
        }
    }

    const handleSaveOrSetWorkouts = () => {
        if(haveWorkoutsInDatabase){
            saveChangesToDatabase();
        } else {
            addWorkoutToDatabase();
        }
    }

    return (
        <section id="my-programs">
            <div className="my-programs__header">
                <h1 className="my-programs__title">
                    Programs I have created
                </h1>
                <div className="my-programs__buttons">
                    <button className="my-programs__save" onClick={handleSaveOrSetWorkouts}>
                        save changes
                    </button>
                    <button className="my-programs__add" onClick={handleAddWorkout}>
                        new program +
                    </button>
                </div>
            </div>
            <div className="programs__box">
                {
                    workoutPrograms.length === 0 ? (
                        <p className="no-program">You have no saved workout program</p>
                    ) : (
                        workoutPrograms.map((workout, workoutIndex) => {
                            return <WorkoutAccordion workout={workout} 
                                                     workoutIndex={workoutIndex}
                                                     handleDeleteWorkout={handleDeleteWorkout}
                                                     handleWorkoutNameChange={handleWorkoutNameChange}
                                                     handleAddExcercise={handleAddExcercise}
                                                     handleExcerciseDelete={handleExcerciseDelete}
                                                     handleExcerciseChange={handleExcerciseChange}
                                    />
                        })
                    )
                }
            </div>
        </section>
    )
}

export default MyPrograms;