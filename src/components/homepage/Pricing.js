import React from 'react'
import './pricing.css'
import PricingCard from './PricingCard'
import Button from './Button'
//PLANS 
import { pricingSectionPlans } from '../../utils/pricingData'

const Pricing = () => {
  return (
    <section id='pricing'>
        <div className='container'>
            <div className='pricing__box'>
                <h2 className='section__title'><span className='heading-pink'>Onyx</span> Pricing Plan</h2>
                <p className='section__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className='pricing-cards__list'>
                   {pricingSectionPlans.map((plan)=><PricingCard key={plan.planName} price={plan.price} planName={plan.planName} logo={plan.logo} description={plan.description}  additons={plan.additons}  />)}
                </div>
                
                  <Button text={"See full offer"}/>
                
                
            </div>

        </div>
    </section>
  )
}

export default Pricing