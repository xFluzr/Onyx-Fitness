import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './pricingCard.css'
import { Link } from 'react-router-dom'

const PricingCard = ({ price, planName, logo, description, additons }) => {
  return (
    <div className='pricing-card'>
      <div className='pricing-card__top'>
        <div className='pricing-card__heading'>
          <h3 className='pricing-card__price'>{price}</h3>
          <h4 className='pricing-card__planName'>{planName}</h4>
        </div>
        <img className='pricing-card__logo' src={logo} alt={`${planName}-logo`} />
      </div>
      <div className='pricing-card__body'>
        <p className='pricing-card__description'>{description}</p>
        <ul className='pricing-card__advantages'>
          {/*Klucze planu zamieniane w liste po czym je mapuje,
                sprawdza czy cos jest danym planie */}
             {
                Object.keys(additons).map((key,index)=>{
                    return <li className='pricing-card__advantage' key={index}>{additons[key]?<FontAwesomeIcon className='checkedIcon' icon={faCheck}/>:<FontAwesomeIcon className='xIcon' icon={faXmark}/>}{key}</li>
                })             
            }
            </ul>
            <Link className='pricing__button' to="/register">
              Sign Up
            </Link>
            
           
        </div>
          {
            Object.keys(additons).map((key, index) => {
              return <li className='pricing-card__advantage' key={index}>{additons[key] ? <FontAwesomeIcon className='checkedIcon' icon={faCheck} /> : <FontAwesomeIcon className='xIcon' icon={faXmark} />}{key}</li>
            })
          }
        </ul>
        <Link className='pricing__button not-allowed' to="#">
          Buy
        </Link>
      </div>
    </div>
  )
}

export default PricingCard