import { Link } from 'react-router-dom'
import InstagramSlider from './InstagramSlider'
import './ourinstagram.css'


const OurInstagram = () => {
  return (
    <section id='instagram'>
        <div className='container'>
          <div className='instagram__wrapper'>
            <h2 className='section__title'><Link className='heading-pink' to={'#'}>Subscribe to</Link> Our Instagram</h2>
            <InstagramSlider/>
          </div>
           
        </div>
    </section>
  )
}

export default OurInstagram