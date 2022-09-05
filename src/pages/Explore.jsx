import React from 'react'
import ExploreFilter from '../components/ExploreFilter/ExploreFilter'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navigation/Navbar'
import OnTheGo from '../components/OnTheGo/OnTheGo'

const Explore = () => {
  return (
    <section className='explore'>
        <Navbar/>
        <ExploreFilter/>
        <OnTheGo/>
        <Footer/>
    </section>
  )
}

export default Explore