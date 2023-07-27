import React from 'react';
import "./card.css";

const Card = ({title,icon,description}) => {
  return (
    <div className='card'>
      <img className='icon' src={icon} alt={title}/>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card