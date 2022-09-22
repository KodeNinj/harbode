import React from 'react'
import map from '../../img/map.png'
const OurLocation = () => {
  return (
    <section className="location">
        <div className="left">
            <img src={map} alt="" />
        </div>
        <div className="right">
            <p><i class="fa-solid fa-location-dot"></i> <b>Head Office:</b> No, 32 Brighton Avenue, Michigan</p>
            <p><i class="fa-solid fa-location-dot"></i> <b>Nigeria Office:</b> Ajah Under-bridge, Lagos. Nigeria</p>
            <p><i class="fa-solid fa-phone"></i> <b>Contact Center (International):</b> 01-485-3499-21</p>
            <p><i class="fa-solid fa-phone"></i> <b>Contact Center (Africa):</b> +234-703-444-4444</p>
        </div>
    </section>
  )
}

export default OurLocation