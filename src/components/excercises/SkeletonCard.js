import React from "react";
import "../excercises/skeletonCard.css";

const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-card__img">
            </div>
            <div className="skeleton-card__name"></div>
            <div className="skeleton-card__muscle"></div>
        </div>
    )
}

export default SkeletonCard;