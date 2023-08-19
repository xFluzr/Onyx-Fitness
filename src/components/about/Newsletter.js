import NewsletterForm from './NewsletterForm'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section id='newsletter'>
      <div className='container'>
        <div className='newsletter__wrapper'>
          <h2 className='section__title'><span className='heading-pink'>Join our Newsletter</span>
          </h2>
          <NewsletterForm/>
          <p className='section__text'>Sing up to our newsletter and get special discount code.</p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter