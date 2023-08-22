import React from "react";
import "../profile/myProgramsAndMyDetails.css";

const MyDetails = () => {
    return (
        <section id="my-details">
            <div className="my-details__header">
                <h1 className="my-details__title">
                    My details
                </h1>
                <button className="my-details__save">
                    save changes
                </button>
            </div>
            <div className="details__box">

            </div>
        </section>
    )
}

export default MyDetails;