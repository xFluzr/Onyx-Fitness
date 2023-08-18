import React, { useEffect, useState } from "react";
import "../pages/excercise.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Target from "../assets/svgicons/target.svg";
import Muscle from "../assets/svgicons/muscle.svg";
import Dumbel from "../assets/svgicons/dumbel.svg";

const Excercise = () => {

    const { id } = useParams();

    const [excerciseInfo, setExcerciseInfo] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)

        const excerciseInfoOptions  = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            headers: {
              'X-RapidAPI-Key': `${process.env.REACT_APP_EXERCISEDB_KEY}`,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };

        const getExcerciseInfo = async (excerciseInfoOptions) => {
            await axios.request(excerciseInfoOptions)
            .then(data => setExcerciseInfo(data.data))
            .catch(error => console.log("Excercise Info API Call failed", error));
        }

        getExcerciseInfo(excerciseInfoOptions)
    },[id]);

    return (
        <section id="excercise">
            <div className="container">
                <div className="excercise__box">
                   {
                        excerciseInfo ? (
                            <>
                                <div className="excercise__img--wrapper">
                                    <picture className="excercise__cls--box">
                                        <img src={excerciseInfo.gifUrl} 
                                            alt={excerciseInfo.name} 
                                            className="excercise__img"
                                        />
                                    </picture>
                                </div>
                                <div className="excercise__info--box">
                                    <h1 className="excercise__name">
                                        {excerciseInfo.name}
                                    </h1>
                                    <hr className="line"></hr>
                                    <div className="excercise__info">
                                        <img src={Dumbel} alt="equipment" className="excercise--icon" />
                                        {excerciseInfo.equipment}
                                    </div>
                                    <div className="excercise__info">
                                        <img src={Target} alt="target" className="excercise--icon" />
                                        {excerciseInfo.target}
                                    </div>
                                    <div className="excercise__info">
                                        <img src={Muscle} alt="body part" className="excercise--icon" />
                                        {excerciseInfo.bodyPart}
                                    </div>
                                    <p className="section__text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum dictum quam nec commodo. Ut convallis sapien vitae lacus sagittis fringilla auctor a leo. Curabitur elementum tempus pharetra. Aliquam egestas eros felis, vel faucibus orci eleifend id. Nam urna nisl, venenatis a est dictum, rutrum cursus ligula. Cras eu nibh vel sapien maximus hendrerit ac non velit. Aliquam at porta ante. Nullam lacus nibh, porttitor eu maximus ac, sagittis auctor massa.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <FontAwesomeIcon icon={faSpinner} className="excercise__loading--icon"/>
                        )
                   }
                </div>
            </div>
        </section>
    )
}

export default Excercise;