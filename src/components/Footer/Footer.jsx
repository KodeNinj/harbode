import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="scrollup">
            <Link to='/'><p><i className="fa fa-angle-double-up" aria-hidden="true"></i></p></Link>
        </div>
        <div className="rightReserve">
            <p>All right Reserved. Harbode 2022</p>
        </div>
        <div className="contacts">
            <div className="mail"><i className="fa-solid fa-envelope"></i><p>info@harbode.com</p></div>
            <div className="ava"><i className="fa-brands fa-rocketchat"></i><p>Chat Ava Online</p></div>
        </div>
    </footer>
  )
}

export default Footer