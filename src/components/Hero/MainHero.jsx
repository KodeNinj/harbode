import React from 'react'
import Navbar from '../Navigation/Navbar'
import Hero from './Hero'

const MainHero = () => {
  return (
    <section className='hero'id='mainhero'>
        <Navbar/>
        <Hero/>
    </section>
  )
}

export default MainHero