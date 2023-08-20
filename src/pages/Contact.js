import './contact.css'
import Map from '../components/contact/Map'
import OurLocation from '../components/contact/OurLocation'
import UserInfoForm from '../components/contact/UserInfoForm'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='contact__wrapper'>
          <div className='contact__top'>
            <OurLocation/>
            <UserInfoForm/>
          </div>
          <Map/>
        </div>
      </div>
    </section>
  )
}

export default Contact