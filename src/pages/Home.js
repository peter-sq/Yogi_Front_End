import React from 'react'
import Hero from '../components/landingPage/Hero'
import Featues from '../components/landingPage/Featues'
import GetStarted from '../components/landingPage/GetStarted'
import Pricing from '../components/landingPage/Pricing'


const Home = () => {
    return (
        <>
          <Hero />
          <Featues/>
          <GetStarted/>
          <Pricing/>
        </>
      
    )
}

export default Home
