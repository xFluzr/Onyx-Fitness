import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ourLocation.css'
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
const OurLocation = () => {
  return (
    <div className='our-location__wrapper'>
      <h2 className='section__title'>We are here to help you!</h2>
      <p className='section__text'>Feel free and contact us any time, we are always ready to help you. In care of our customers we are trying to answer as fast as possible.</p>
      <div className='our-location__boxes'>
        <div className='our-address__box'>
          <h4 className='box__title'>Warsaw, Poland</h4>
          <p className='box__info'>ul. Diamentowa 16A</p>
        </div>
        <div className='opening-hours__box'>
          <h4 className='box__title'>Opening hours</h4>
          <p className='box__info'>Mon to Fri: 6:00 - 22:00</p>
          <p className='box__info'>Sat to Sun: 8:00 - 21:00</p>
        </div>
        <div className='contact__box'>
          <h4 className='box__title'>Information</h4>
          <p className='box__info'>+777882121</p>
          <p className='box__info'>onyxfitness@contact.pl</p>
        </div>
        <div className='social-media__box'>
          <h4 className='box__title'>Follow Us On</h4>
          <ul className='social-media__wrapper'>
            <li className='social-icon__wrapper'>
              <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
            </li>
            <li className='social-icon__wrapper'>
              <FontAwesomeIcon icon={faTwitter} className='social-icon'/>
            </li>
            <li className='social-icon__wrapper'>
              <FontAwesomeIcon icon={faFacebook} className='social-icon'/>
            </li>
            <li className='social-icon__wrapper'>
              <FontAwesomeIcon icon={faTiktok} className='social-icon'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurLocation