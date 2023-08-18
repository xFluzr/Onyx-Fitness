import './landingAbout.css';

//IMAGES
import landingImage from '../../assets/about/img1.png'
import icon1 from '../../assets/svgicons/icon-about4.svg'
import icon2 from '../../assets/svgicons/icon-about5.svg'

const LandingAbout = () => {
  return (
    <section id='landing-about'>
        <div className='container'>
            <div className='landing-about__wrapper'>
                <img className='landing__image' src={landingImage} alt='girl portrait'/>
                <div className='landing__context'>
                    <h2 className='section__title'><span className='heading-pink'>About</span> Us</h2>
                    <hr className='line'/>
                    <p className='section__text'>Our gym was created out of passion for a healthy lifestyle and sport. We wanted to create a place where everyone could fully develop their body and mind, regardless of age or level of advancement. Therefore, our offer is addressed to everyone - from beginners who are just starting their adventure with sport to experienced players.</p>
                    <p className='section__text'>Our priority is to provide you with the best conditions to develop and achieve your goals. Therefore, we focus on an individual approach to each client and regular monitoring of progress.</p>
                    <ul className='our__achievements'>
                        <li>
                            <img className='achievement__icon' src={icon1} alt='achievement-icon'/>
                            <div className='achievement__wrapper'>
                                <h3 className='achievement__title'>Recomendation</h3>
                                <p className='achievement__text'>We are the most recommended gym in City</p>
                            </div>
                        </li>
                        <li>
                        <img className='achievement__icon' src={icon2} alt='achievement-icon'/>
                            <div className='achievement__text'>
                                <h3 className='achievement__title'>Happy Members</h3>
                                <p className='achievement__text'>Sevenfold best customer service award winners</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LandingAbout