import React, { Component } from 'react';
import {ServiceBoxesLeft, ServiceBoxesRight} from "../../UI/ServiceBoxes/serviceBoxes.js";
import ServiceOpeningContent from '../../UI/ServiceOpeningContent/serviceOpeningContent.js';
import "./manpowersupply.css"





class manPowerSupply extends Component {

    

    render () {
  
        
        
        return (
                <div> 
                     <ServiceOpeningContent 
                     image="skilledworker.jpg" 
                     heading="Manpower Supply and Recruitment Services"/>  

                    <div className="service-boxes-margin">
                        <div className="container"> 
                            <h4 className="content-service-heading content-1"> Manpower Supply and Recruitment Services </h4>
                  
                            {/* <h2 className="content-service-heading content-2">We make community of happy customers and strong bonds with our buisness partners by providing world class services</h2> */}
                        </div>
                        <div className="borderline"> </div>
                        <ServiceBoxesLeft 
                  
                        text="We provide complete range of general managed Manpower services, construction support services, skilled Manpower to execute special assigned works. The company under take all types of civil specialized works such as block works, Plastering, Tiling, Interlock etc, apart from this we also have Skilled M.E.P workers like Electrician, Plumber, Welder etc"
                        image="manpowere.jpeg" />


                        <ServiceBoxesRight 
                        
                        text="
                        Apart from the above, we can also supply skilled and unskilled manpower locally on both Short  term and long term basis. Our team will execute the assigned task using the most effective/efficient way within the stipulated time to achieve 100% customer satisfaction."
                        
                        image="cworking.jpg" />
                         
                         <ServiceBoxesLeft 
                      heading="Skilled and Unskilled Categories"
                        text="Electrician •Scaffolders •Technician •Mason •Carpenter •Steel Fixer •General Helpers •Plumber •Foreman •Cleaners/Housemaid •Welders •Riggers •Drivers •Security Guard •Machine Operators •Fire Fighters •Safety Officer •Office/Tea boy •Clerk •Supervisor •Cashier •Secretary •Document Controller •Receptionist etc"
                        image="website-plumbing-repair.jpg" />

                        
                         </div>
                </div>
        )
    }
}

export default manPowerSupply;
