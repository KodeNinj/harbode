import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
        <Link to='/'><img src={Logo} alt="" className='main-logo' /></Link>
        </div>
        <div className="hero-right">
            <div className="links">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/explore'><li>Explore</li></Link>
                    <Link to='/about-us'><li>About Us</li></Link>
                    <Link to='/contact-us'><li>Contact Us</li></Link>
                </ul>
            
            </div>
            <Link to='/login'>
            <div className="user-home-btn">
           <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            </Link>
    
        </div>
        <div className="hamburger">
        <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        </nav>
  )
}

export default Navbar