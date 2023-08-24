import React from "react";
import "../profile/detailInput.css";

const DetailInput = ({name, type, id}) => {
    return (
        <div className="detail__input--wrapper">
            <label className="detail__label" htmlFor={id} >{name}</label>
            <input className="detail__input" id={id} type={type} />
        </div>
    )
}

export default DetailInput;