import React from 'react'
import HeroImageMobile from '../../img/heroImgMobile.png'
import HeroImageWeb from '../../img/heroImgWeb.png'
const Hero = () => {
  return (
    <div className="hero-content">
        <div className="left">
            <h2>House Hunting Made Easy</h2>
            <p>Explore various properties that suites your needs and budget. Rent or buy? We gat your back</p>
            <button>Explore</button>
        </div>
        <div className="right">
            <img src={HeroImageWeb} alt="" className='web' />
            <img src={HeroImageMobile} alt="" className='mobile' />
        </div>
    </div>
  )
}

export default Hero