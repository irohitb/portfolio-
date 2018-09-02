import React, { Component } from 'react';
import {ServiceBoxesLeft, ServiceBoxesRight} from "./../../UI/ServiceBoxes/serviceBoxes.js";
import ServiceOpeningContent from './../../UI/ServiceOpeningContent/serviceOpeningContent.js';
import './printng.css'





class printing extends Component {

    

    render () {
  
        
        
        return (
                <div> 
                     <ServiceOpeningContent 
                     image="dPrinting1.jpg" 
                     heading="Printing Services" />
                    <div className="service-boxes-margin">
                        <div className="container"> 
                            <h4 className="content-service-heading content-1"> WE ARE ONE STOP SOLUTION FOR ALL YOUR PRINTING NEEDS </h4>
                            {/* <h2 className="content-service-heading content-2">We make community of happy customers and strong bonds with our buisness partners by providing world class services</h2> */}
                        </div>
                        <div className="borderline"> </div>
                        <ServiceBoxesLeft 
                        heading="Corporate Forms"
                        text="•Portable Displays •Roll-up Banners •Pop-up Banners •Vinyl Stickers •Flags •Corporate Gift Items •Logo Creation •Catalogues •Foam Boards •Large Format Outdoor Printing •Large Format Indoor Printing •Vehicle Branding •Exibition Hall Arranging •Stickers & Labels •Banners •Bill Boards •Building Wraps •Wall paper in Canavas •Safety Signages •Road Signages •Neon Boards •LED Boards "
                        image="download.jpeg" />


                        <ServiceBoxesRight 
                        heading="Advertising Materials"
                        text="•Product Brochures •Flyers •Leaflets •Posters •PVC Stickers •Year Planners • Greeting Cards •Tickets •Coupons •Paper Stickers •Menus •Catalogues •Promotional Sheets •CD Covers •CD Labels •Car Mats •Vehicle Stickers •Danglers" 
                        image="dPrinitng.png" />
        

                        <ServiceBoxesLeft 
                        heading="Digital Printing"
                        text="•Portable Displays •Roll-up Banners •Pop-up Banners •Vinyl Stickers •Flags •Corporate Gift Items •Logo Creation •Catalogues •Foam Boards •Large Format Outdoor Printing •Large Format Indoor Printing •Vehicle Branding •Exibition Hall Arranging •Stickers & Labels •Banners •Bill Boards •Building Wraps •Wall paper in Canavas • Safety Signages •Road Signages •Neon Boards •LED Boards"
                        image="printing.jpg" />
       
                    </div>
                </div>
        )
    }
}

export default printing

