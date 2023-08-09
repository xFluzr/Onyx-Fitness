import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './userOpinion.css'

const UserOpinion = ({imgSrc,userInfo,rating,description}) => {
  return (
    <div className='user__opinion'>
      <p className='user__review'>{description}</p>
      <div className="user__info">
        <div className="user__rating--wrapper">
            <h2 className="user__name">
              {userInfo} 
            </h2>
            <p className='user__rating'>{rating}<FontAwesomeIcon icon={faStar} className='star__rating'/></p>
        </div>
        <img className='user__photo' src={imgSrc} alt='user__image'/>    
        </div>
        
    </div>
        
  )
}

export default UserOpinion