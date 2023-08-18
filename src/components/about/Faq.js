import Video from '../../assets/video/faq.mp4'
import FaqQuestion from './FaqQuestion'
import './faq.css'

const Faq = () => {
  return (
    <section id='faq'>
      <div className='container'>
        <div className='faq__wrapper'>
          <h2 className='section__title heading-pink'>F.A.Q</h2>
          <p className='section__text'>Browse through the questions below to find the answers you're looking for.</p>
          <div className='faq__content'>
            <figure className='faq__video--box'>
              <video className='faq__video' src={Video} type='video/mp4' autoPlay loop muted/>
            </figure>
            <div className='questions__wrapper'>
              <FaqQuestion question='How Can I join the club?' answer='Choose the right membership plan: We offer a variety of membership plans to suit your needs. Whether you prefer a month-to-month plan or a long-term commitment, we have options that fit your schedule and budget.'/>
              <FaqQuestion question='Do you have classes for children?' answer='For our young participants, we have engaging and dynamic workouts that focus on building strength, coordination, and overall fitness. Our experienced trainers create a fun and safe environment where children can enjoy the benefits of physical activity while learning healthy habits that will last a lifetime.'/>
              <FaqQuestion question='Is there a free entry?' answer="Yes it is. Experience the gym like never before with our special offer - your first visit is on us! That's right, we're thrilled to provide you with a complimentary pass to try out our state-of-the-art facilities and exciting fitness programs."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq