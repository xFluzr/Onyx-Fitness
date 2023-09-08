import PricingCard from '../components/homepage/PricingCard';
import './offer.css'
import { offerSectionPlans } from '../utils/pricingData';
const Offer = () => {
  return (
    <section id="offer">
      <div className='container'>
        <div className='offer__box'>
          <h1 className='section__title'>Our <span className='heading-pink'>memberships</span> plans</h1>
          <div className='offer__plans--wrapper'>
            {offerSectionPlans.map((plan) => <PricingCard key={plan.planName} planName={plan.planName} logo={plan.logo} price={plan.price} description={plan.description} additons={plan.additons} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer