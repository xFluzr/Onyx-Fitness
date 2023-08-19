import PricingCard from '../components/homepage/PricingCard';
import './offer.css'
import { offerSectionPlans } from '../utils/pricingData';
const Offer = () => {
  return (
    <section id="offer">
        <div className='container'>
            <div className='offer__wrapper'>
               {offerSectionPlans.map((plan)=><PricingCard key={plan.planName} planName={plan.planName} logo={plan.logo} price={plan.price} description={plan.description} additons={plan.additons} />)}
            </div>
        </div>
    </section>
  )
}

export default Offer