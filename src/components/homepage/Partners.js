import './partners.css'

//PARTNERS IMAGES
import Boar from '../../assets/sponsors/boar.png'
import Tea from '../../assets/sponsors/tea.png'
import Spa from '../../assets/sponsors/spa.png'
import Food from '../../assets/sponsors/healthyfood.png'
import Lotus from '../../assets/sponsors/lotus.png'

const Partners = () => {
  return (
    <section id='partners'>
        <div className='container'>
            <div className='partners__wrapper'>
                <h2 className='section__title'>
                    <span className='heading-pink'>Our </span> 
                    Sponsors</h2>
                <div className='sponsors__wrapper'>
                    <div className='onyx__sponsor'>
                        <img className='sponsor__image' src={Boar} alt='boar.com'/>
                        <h2 className='sponsor__name'>Boars</h2>
                    </div>
                    <div className='onyx__sponsor'>
                        <img className='sponsor__image' src={Tea} alt='boar.com'/>
                        <h2 className='sponsor__name'>TeaPot</h2>
                    </div>
                    <div className='onyx__sponsor'>
                        <img className='sponsor__image' src={Spa} alt='spa-center'/>
                        <h2 className='sponsor__name'>Spa Center</h2>
                    </div>
                    <div className='onyx__sponsor'>
                        <img className='sponsor__image' src={Food} alt='boar.com'/>
                        <h2 className='sponsor__name'>Natural Food</h2>
                    </div>
                    <div className='onyx__sponsor'>
                        <img className='sponsor__image' src={Lotus} alt='boar.com'/>
                        <h2 className='sponsor__name'>Lotus Yoga</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners