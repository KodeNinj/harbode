import React from 'react'
import FilterRibbon from '../components/filterribbon/FilterRibbon'
import MainHero from '../components/Hero/MainHero'
import Partners from '../components/Partners/Partners'
import Property from '../components/Properties/Property'

import '../index.css'
const Home = () => {
  return (
    <div className='' >
        <MainHero/>
        <FilterRibbon/>
        <Partners/>
        <Property/>
    </div>
  )
}

export default Home