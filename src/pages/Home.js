import React from 'react'
import Hero from '../components/landingPage/Hero'
import Featues from '../components/landingPage/Featues'
import GetStarted from '../components/landingPage/GetStarted'
import Pricing from '../components/landingPage/Pricing'
import Footer from '../components/landingPage/Footer'
import Faq from '../components/landingPage/Faq'



const Home = () => {
    return (
        <>
          <Hero />
          <Featues/>
          <GetStarted/>
          <Pricing/>
          <Faq/>
          <Footer/>
        </>
      
    )
}

export default Home
