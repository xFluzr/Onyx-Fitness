import React, {useEffect} from 'react'
import LandingAbout from '../components/about/LandingAbout'
import DataSummary from '../components/about/DataSummary'
import Faq from '../components/about/Faq'
import Newsletter from '../components/about/Newsletter'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
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