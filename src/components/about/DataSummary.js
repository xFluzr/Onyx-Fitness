import './dataSummary.css'

//IMAGES 
import icon1 from '../../assets/svgicons/icon-about2.svg'
import icon2 from '../../assets/svgicons/icon-about4.svg'
import icon3 from '../../assets/svgicons/icon-about5.svg'
import icon4 from '../../assets/svgicons/icon-about7.svg'

const DataSummary = () => {
  return (
    <section id="data-summary">
      <div className='container'>
        <div className='data-summary__wrapper'>
          <div className='data__box'>
            <img className='data__image' src={icon1} alt='data-icon'/>
            <h2 className='data__title'>16</h2>
            <p className='data__description'>Classes</p>
          </div>
          <div className='data__box'>
            <img className='data__image' src={icon2} alt='data-icon'/>
            <h2 className='data__title'>500+</h2>
            <p className='data__description'>Active Members</p>
          </div>
          <div className='data__box'>
            <img className='data__image' src={icon3} alt='data-icon'/>
            <h2 className='data__title'>8</h2>
            <p className='data__description'>Club Awards</p>
          </div>
          <div className='data__box'>
            <img className='data__image' src={icon4} alt='data-icon'/>
            <h2 className='data__title'>No. 1</h2>
            <p className='data__description'>In City</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataSummary