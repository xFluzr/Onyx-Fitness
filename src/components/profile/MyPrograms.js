import React, { useState } from "react";
import "../profile/myProgramsAndMyDetails.css";

const MyPrograms = () => {
    const [workoutPrograms, setWorkoutPrograms] = useState("")
    return (
        <section id="my-programs">
            <div className="my-programs__header">
                <h1 className="my-programs__title">
                    Programs I have created
                </h1>
                <button className="my-programs__add">
                    new program +
                </button>
            </div>
            <div className="programs__box">
                {
                    workoutPrograms === "" ? (
                        <p className="no-program">You have no saved workout program</p>
                    ) : (
                        <p className="no-program">Thats your workout programs</p>
                    )
                }
            </div>
        </section>
    )
}

export default MyPrograms;