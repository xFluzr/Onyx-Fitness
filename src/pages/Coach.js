import React from "react";
import { useParams } from "react-router-dom";

import coachesData from "../utils/coachesData";

const Coach = () => {

    const {id} = useParams();

    // Searching in coaches data for exact coach with id from param
    const coach = coachesData.find((coach) => coach.link === id);

    return (
        <div>
            Trener: {id}
            {coach.name}
            {coach.description}
        </div>
    )
}

export default Coach;