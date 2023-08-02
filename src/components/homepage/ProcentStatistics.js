import React from "react";
import "../../components/homepage/ProcentStatistics.css";

const ProcentStatistics = (props) => {
    return (
        <div className="procent-statistics__box">
            <div className="procent-statistics__header">
                <span className="procent-statistics__name">
                    {props.name}
                </span>
                <span className="procent-statistics__number">
                    {props.number}%
                </span>
            </div>
            <div className="procent-statistics__bar">
                <div className="procent-statistics__proggres" style={{width: `${props.number}%`}}>
                </div>
            </div>
        </div>
    );
}

export default ProcentStatistics;