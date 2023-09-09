import React from "react";
import "../profile/detailInput.css";

const DetailInput = ({label,name, type, id,value,updateFunction,max}) => {

    const inputHandler=(e)=>{
        updateFunction(e.target.value)
        
    }

    return (
        <div className="detail__input--wrapper">
            <label className="detail__label" htmlFor={id} >{label}</label>
            <input className="detail__input" name={name} id={id} type={type} value={value} onChange={inputHandler}/>
        </div>
    )
}

export default DetailInput;