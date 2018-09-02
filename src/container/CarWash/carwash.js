import React, { Component } from 'react';
import {ServiceBoxesLeft, ServiceBoxesRight} from "./../../UI/ServiceBoxes/serviceBoxes.js";
import ServiceOpeningContent from './../../UI/ServiceOpeningContent/serviceOpeningContent.js';






class printing extends Component {

    

    render () {
  
        
        
        return (
                <div> 
                     <ServiceOpeningContent 
                     image="car-banner.jpg" 
                     heading="CAR WASH" />
                    <div className="service-boxes-margin">
                        <div className="container"> 
                        
                            <h4 className="content-service-heading content-1">Get the Best Interior and Exterior Car wash possible  </h4>

                            <p className="text-center">We are a team of expert personnel in providing quality car wash service with 100% customer satisfaction at a great value for time and money in multiple locations.. We use the innovative waterless technology for car wash, which is easy and efficient way of making your car sparkling clean. We use biodegradable cleansing formulas and microfiber cloths to ensure a high quality, environmentally friendly car wash. Our goal is to provide all our customers the best car wash experience possible providing the quality service and value for money.</p>
                            {/* <h2 className="content-service-heading content-2">We make community of happy customers and strong bonds with our buisness partners by providing world class services</h2> */}
                        </div>
                        <div className="borderline"> </div>
                        <ServiceBoxesLeft 
                        heading="INTERIOR CAR DETAILING"
                        text="Whether the inside is “trashed” or just “needs a good cleaning”, our Interior Auto Detailing team will treat all the cloth by vacuuming, shampooing, scrubbing, extracting, and any other professional means necessary to remove stains."
                        image="interiror-car.jpg" />


                        <ServiceBoxesRight 
                        heading="EXTERIOR CAR WASH"
                        text="We use our newest revolutionary soap less wash that works great on any paint surface. It Cleans, polishes and protects without using water and helps to keep the car clean and shining." 
                        image="ex-car-wash.png" />
        

                 
                    </div>
                </div>
        )
    }
}

export default printing

