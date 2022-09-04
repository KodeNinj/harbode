import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="scrollup">
            <a href='#mainhero'><p><i class="fa fa-angle-double-up" aria-hidden="true"></i></p></a>
        </div>
        <div className="rightReserve">
            <p>All right Reserved. Harbode 2022</p>
        </div>
        <div className="contacts">
            <div className="mail"><i class="fa-solid fa-envelope"></i><p>info@harbode.com</p></div>
            <div className="ava"><i class="fa-brands fa-rocketchat"></i><p>Chat Ava Online</p></div>
        </div>
    </footer>
  )
}

export default Footer