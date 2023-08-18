import React from 'react'
import LandingAbout from '../components/about/LandingAbout'
import DataSummary from '../components/about/DataSummary'
import Faq from '../components/about/Faq'
import Newsletter from '../components/about/Newsletter'

const About = () => {
  return (
    <>
        <LandingAbout/>
        <DataSummary/>
        <Faq/>
        <Newsletter/>
    </>
  )
}

export default About