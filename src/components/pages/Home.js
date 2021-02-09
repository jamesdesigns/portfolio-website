import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Description from '../Description'
import Footer from '../Footer'
import HeroSection from '../HeroSection'



function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <Cards />
      <Footer />
    </>
  )
}

export default Home
