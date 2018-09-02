import React, { Component } from 'react';
import {ServiceBoxesLeft, ServiceBoxesRight} from "../../UI/ServiceBoxes/serviceBoxes.js";
import ServiceOpeningContent from '../../UI/ServiceOpeningContent/serviceOpeningContent.js';






class manPowerSupply extends Component {

    

    render () {
  
        
        
        return (
                <div> 
                     <ServiceOpeningContent 
                     image="skilledworker.jpg" 
                     heading="Manpower Supply"/>
                    <div className="service-boxes-margin">
                        <div className="container"> 
                            <h4 className="content-service-heading content-1"> Man Power Services we provide </h4>
                            {/* <h2 className="content-service-heading content-2">We make community of happy customers and strong bonds with our buisness partners by providing world class services</h2> */}
                        </div>
                        <div className="borderline"> </div>
                        <ServiceBoxesLeft 
                        heading="Accprding to requirments"
                        text="•Temporary/ Contract, •Temp-to Hire, •Direct Hire, •Project Temporary- Flexible, •short-term staff additions or replacements. •Temp-to-Hire- Transition to full-time employee on hours-worked basis. •Direct Hire- Staff recruitment and placement on a fee-for-service basis. •Positions start from entry level. •Direct Hire- Staff recruitment and placement on a fee-service basis. •Positions range from entry to executive level."
                        image="manpowere.jpeg" />


                        <ServiceBoxesRight 
                        heading="Skilled and Experienced Categories "
                        text="•Electrician Scaffolders Technician •Mason •Carpenter  •Steel Fixer  •General Helpers •Plumber •Foreman •Cleaners/Housemaid •Welders Riggers •Drivers •Security Guard •Machine Operators •Fire Fighters •Safety Officer •Office / Tea boy •Clerk  •Supervisor •Cashier •Secretary •Document Controller •Receptionist etc….
                        " 
                        image="cworking.jpg" />
    
       
                    </div>
                </div>
        )
    }
}

export default manPowerSupply;

