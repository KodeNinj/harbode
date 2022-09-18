import React from 'react'
import AboutHero from '../components/AboutUsHero/AboutHero'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navigation/Navbar'
import OnTheGo from '../components/OnTheGo/OnTheGo'

const AboutUs = () => {
  return (
    <section className='about_Us'>
      <Navbar/>
      <AboutHero/>
      <OnTheGo/>
      <Footer/>
    </section>
  )
}

export default AboutUs