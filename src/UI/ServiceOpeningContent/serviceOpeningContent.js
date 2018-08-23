import React from 'react'
import OpeningImage from "./../../images/printing.jpg"
import './ServiceOpeningContent.css'



const serviceOpeningContent  = (props) => {
    const images = require.context('./../../images', true);
    let image = images("./" + props.image)
  
    return (
        <div className="opening-content-overlay">
            <div class="service-opening-content"> 
                <img src={image}  className="service-opening-content-image"/>
                <h2 className="service-opening-content-heading">{props.heading} </h2> 
            </div>
        </div>
    )
}

export default serviceOpeningContent;