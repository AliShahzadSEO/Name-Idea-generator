import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import CatergorySection from '../CatergorySection/CatergorySection'
import Footer from '../Footer/Footer'

const HomeMain = () => {
  const bgImage= "/bg2.jpg"
  const context = "Craft The Perfect Persona With Name Idea Generator"
  return (
    <div>
      <HeroSection bgImage={bgImage} context={context}/>
      <CatergorySection />
      <Footer />
    </div>
  )
}

export default HomeMain

