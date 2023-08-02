import React from "react";
import "./theNatural.css";
import ProcentStatistics from "./ProcentStatistics";

import Video from "../../assets/video/the_natural.mp4";

const TheNatural = () => {
    return (
        <section id="theNatural">
            <div className="container">
                <div className="theNatural__box">
                    <div className="theNatural__content--box">
                        <div className="theNatural__content">
                            <h2 className="section__title">
                                <span className="heading-pink">
                                    The natural
                                </span>
                                <br />
                                <span className="section__title--small">way to get your mind & body together</span>
                            </h2>
                            <p className="section__text">
                                Cultivating mindfulness allows you to bring your attention to the present moment, fostering a deep sense of awareness and tranquility. Meditation practices help calm the mind, reduce stress, enhance focus.
                            </p>
                        </div>
                        <div className="theNatural__statistics">
                             <ProcentStatistics name="Yoga training" number="75"/>
                             <ProcentStatistics name="Meditation" number="85"/>
                             <ProcentStatistics name="Positive attitude" number="100"/>
                        </div>
                    </div>
                    <figure className="theNatural__video--box">
                        <video className="theNatural__video" src={Video} type="video/mp4" autoPlay loop muted/>
                    </figure>
                </div>
            </div>
        </section>
    ); 
}

export default TheNatural;