import React from "react";
import "../profile/myPrograms.css";

const MyPrograms = () => {
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
                <p className="no-program">You have no saved workout program</p>
            </div>
        </section>
    )
}

export default MyPrograms;