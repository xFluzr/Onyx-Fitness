import React, { useState, useEffect } from "react";
import Login from "../pages/Login";
import WorkoutContent from "../components/workouts/WorkoutContent";
import WorkoutsList from "../components/workouts/WorkoutsList";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import "./workouts.css";
import { useUserAuth } from "../context/UserAuthContext";

const Workouts = ({loggedIn}) => {

    const [workoutPrograms, setWorkoutPrograms] = useState([])
    const [workoutIndex, setWorkoutIndex] = useState(0);
    const { user } = useUserAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    useEffect(() => {
        if(loggedIn){
        const workoutProgramsQuery = query(collection(db, "workoutplans"), where("email", "==", `${user.email}`));

        const getWorkoutPrograms = async () => {
            const data = await getDocs(workoutProgramsQuery);
            if(data.empty){
                console.log("No data for this user");
                return;
            } else {
                data.forEach((doc) => {
                        setWorkoutPrograms(JSON.parse(`${doc.data().workouts}`));
                    });
            }
        }

            getWorkoutPrograms()
        }
    },[loggedIn])

    return (
        <section id="workouts">
            {
                !user ? (
                    <Login where="/workouts" />
                ) : (
                    <div className="container">
                        <div className="workouts__box">
                            <h1 className="section__title">Your <span className="heading-pink">workout</span></h1>
                            <div className="workouts__layout">
                                {
                                    workoutPrograms.length > 0 ? (
                                        <>
                                            <WorkoutsList workoutPrograms={workoutPrograms} setWorkoutIndex={setWorkoutIndex}/>
                                            <WorkoutContent workout={workoutPrograms[workoutIndex]} workoutIndex={workoutIndex}/>
                                        </>
                                    ) : (
                                        <div className="workouts-empty">
                                            <p className="workouts-empty__name">
                                                You have no saved workout program
                                            </p>
                                            <Link to="/profile" className="background btn">Create workout</Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default Workouts;