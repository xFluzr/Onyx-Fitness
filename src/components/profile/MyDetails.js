import React from "react";
import "../profile/myProgramsAndMyDetails.css";
import DetailInput from "../profile/DetailInput";

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
                <DetailInput name="Nickname" type="text" id="detail_nickname" />
                <DetailInput name="Age" type="number" id="details_age" />
                <DetailInput name="Height (cm)" type="number" id="details_height" />
                <DetailInput name="Weight (kg)" type="number" id="details_weight" />
            </div>
        </section>
    )
}

export default MyDetails;