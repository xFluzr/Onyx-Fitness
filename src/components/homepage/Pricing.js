import React from 'react'
import './pricing.css'
import PricingCard from './PricingCard'
import Button from './Button'

//IMAGES
import Basic from '../../assets/svgicons/basic.svg'
import Standard from '../../assets/svgicons/standard.svg'
import Premium from '../../assets/svgicons/premium.svg'

//PLANS
const basicPlan={
    "unlimited gym access":true,
    "personal trainer":false,
    "one class a week":true,
    "pool, sauna, salt cave":false,
    "free training towel":true
  }
  
const standardPlan={
  "unlimited gym access":true,
  "personal trainer":false,
  "one class a week":true,
  "pool, sauna, salt cave":true,
  "free training towel":true
}
const premiumPlan={
  "unlimited gym access":true,
  "personal trainer":true,
  "one class a week":true,
  "pool, sauna, salt cave":true,
  "free training towel":true
}

const Pricing = () => {
  return (
    <section id='pricing'>
        <div className='container'>
            <div className='pricing__box'>
                <h2 className='section__title'><span className='heading-pink'>Onyx</span> Pricing Plan</h2>
                <p className='section__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className='pricing-cards__list'>
                    <PricingCard price={29} planName="Basic" logo={Basic} description="Basic plan" plan={basicPlan}/>
                    <PricingCard price={39} planName="Standard" logo={Standard} description="Standard plan" plan={standardPlan}/>
                    <PricingCard price={69} planName="Premium" logo={Premium} description="Premium plan" plan={premiumPlan}/>
                </div>
                
                  <Button text={"See full offer"}/>
                
                
            </div>

        </div>
    </section>
  )
}

export default Pricing