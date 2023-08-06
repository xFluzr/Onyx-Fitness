import React from 'react'
import Landing from '../components/homepage/Landing'
import OurApproach from '../components/homepage/OurApproach'
import PeaceToYour from '../components/homepage/PeaceToYour'
import Joyfull from '../components/homepage/Joyfull'
import Pricing from '../components/homepage/Pricing'
import TheNatural from '../components/homepage/TheNatural'
import OurCoaches from '../components/homepage/OurCoaches'
import Opinions from '../components/homepage/Opinions'
import Partners from '../components/homepage/Partners'


const Home = () => {
  return (
    <>
      <Landing />
      <OurApproach/>
      <PeaceToYour/>
      <Joyfull />
      <Pricing/>
      <TheNatural />
      <OurCoaches />
      <Opinions/>
      <Partners/>
    </>
  )
}

export default Home