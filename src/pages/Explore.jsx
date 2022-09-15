import React from 'react'
import ExploreHero from '../components/ExploreHero/ExploreHero'
import Footer from '../components/Footer/Footer'
import OnTheGo from '../components/OnTheGo/OnTheGo'
const Explore = () => {
  return (
    <section className='explore'>
        <ExploreHero/>
        <h2>I am in between, dudes!</h2>
        <h2>I am in between, dudes!</h2>
        <h2>I am in between, dudes!</h2>
        <h2>I am in between, dudes!</h2>
        <OnTheGo/>
        <Footer props='/explore'/>
    </section>
  )
}

export default Explore
