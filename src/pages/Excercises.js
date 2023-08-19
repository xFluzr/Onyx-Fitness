import React from "react";
import "../pages/excercises.css";
import ExcercisesList from "../components/excercises/ExcercisesList";

const Excercises = () => {
    return (
        <section id="excercises">
            <div className="container">
                <div className="excercises__box">
                    <h1 className="section__title">
                        Exercise <span className="heading-pink">Wiki</span>
                    </h1>
                    <p className="section__text">
                        Expand your knowledge and find the perfect exercise for you
                    </p>
                    <ExcercisesList />
                </div>
            </div>
        </section>
    );
}

export default Excercises;