import React from "react";
import "../profile/detailInput.css";

const DetailInput = ({label,name, type, id,value,updateFunction,max}) => {

    const inputHandler=(e)=>{
        let value
        if(e.target.id === "detail_nickname"){
            value = e.target.value.slice(0,12);
        } else if(e.target.id === "details_height" || e.target.id === "details_weight" || e.target.id === "details_age"){
            value = e.target.value.slice(0,3);
        } else {
            value = e.target.value;
        }
        updateFunction(value)
    }

    return (
        <div className="detail__input--wrapper">
            <label className="detail__label" htmlFor={id} >{label}</label>
            <input className="detail__input" name={name} id={id} type={type} value={value} onChange={inputHandler}/>
        </div>
    )
}

export default DetailInput;