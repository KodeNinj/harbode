import React from 'react'
import Logo from '../../img/logo.png';
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="" className='main-logo' />
        </div>
        <div className="hero-right">
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            
            </div>
            <div className="user-home-btn">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
    
        </div>
        <div className="hamburger">
        <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        </nav>
  )
}

export default Navbar