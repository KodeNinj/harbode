import React from 'react'
import {properties} from '../Properties/propertiesobj'
const ExploreFilter = () => {
    return(
        <section className='explorefilter '>
        <div className="ups">
            <div className="type">
                <select name="type" id="type">
                    <option value="default">Type</option>
                    <option value="Houses">Houses</option>
                    <option value="OfficeSpace">Office Space</option>
                    <option value="Land">Land</option>
                    <option value="Hostel">Hostel</option>
                </select>
            </div>

            <div className="categories">
                <select name="category" id="category">
                    <option value="default">Category</option>
                    <option value="Rent">Rent</option>
                    <option value="Sales">Sales</option>
                    <option value="Lease">Lease</option>
                    <option value="Short-Let">Short-Let</option>
                </select>
            </div>

            <div className="locations">
                <select name="location" id="location">
                    <option value="default "> Location</option>
                    <option value="lagos"> Lagos</option>
                    <option value="ibadan"> Ibadan</option>
                    <option value="Ogun"> Ogun</option>
                    <option value="Osun"> Osun</option>
                    <option value="Abuja"> Abuja</option>
                    <option value="Sokoto"> Sokoto</option>
                    <option value="Port Harcourt"> Port Harcourt</option>
                </select>
            </div>
            <div className="prices">
                <select name="price" id="price" className="price">
                    <option value="default">Price Range</option>
                    <option value="least">50,000 - 199,999</option>
                    <option value="small">200,000 - 399,999</option>
                    <option value="medium">400,000 - 899,999</option>
                    <option value="high">900,000 - 1.4M</option>
                    <option value="Extreme">+1.4M</option>
                </select>
            </div>
        </div>
        <div className="down">
            <form action="" method="get">
                <input type="text" name="search" id="search" placeholder='Search for property/Advert ID' />
                <button type="submit">Search Now</button>
            </form>
            
        </div>
        <div className="main-box-container">
            {properties.map((e)=>{
                return(
                <div className="main-box" key={e.id}>

                    <div className="top">
                        <div className="left">
                            <img src={e.imgUrl} alt="" />
                        </div>
                        <div className="right">
                            <div className="up">
                                <h5 >{e.name}</h5>
                                <p>{e.desc}</p>
                            </div>
                            <div className="down">
                                <p>#{e.price} <span>/Annum</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p><i className="fa fa-bed" aria-hidden="true"></i> {e.amenity.bedroom} <span> Bedrooms</span></p>
                        <p><i className="fa fa-shower" aria-hidden="true"></i> {e.amenity.bathroom} <span>Bathrooms</span></p>
                        <p><i className="fa fa-toilet"></i> {e.amenity.Toilets} <span>Toilets</span></p>
                        <p><i className="fa-solid fa-car"></i> {e.amenity.ParkingSpace} <span>car park</span></p>
                    </div>
                </div>
                )
            })}
            </div>
        </section>
    )
       
        
    


    }
export default ExploreFilter
