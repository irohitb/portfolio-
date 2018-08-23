import React from "react";
import "./serviceBoxes.css"
const images = require.context('./../../images', true);

export const ServiceBoxesLeft = (props) => {
  
    let image = images("./" + props.image)

return (
        <div className="service-left-main"> 
         
                <div className="row"> 
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="image-class"> 
                          <img src={image} className="service-images"/> 
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="text-class"> 
                        <h2 className="text-heading"> {props.heading} </h2>
                          <p className="para-text"> {props.text}</p>
                        </div>
                    </div>
                </div>
      
        </div>       
        ) 
    }



export const ServiceBoxesRight = (props) => {
    let image = images("./" + props.image)

    return (
            <div className="service-right-main"> 
           
                    <div className="row"> 
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="text-class"> 
                                <h2 className="text-heading"> {props.heading}</h2>
                                <p className="para-text">{props.text} </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                           <div className="image-class"> 
                              <img src={image} className="service-images"/>
                            </div>   
                        </div>
                    </div>
   
            </div>       
            ) 
    }
    
    
  