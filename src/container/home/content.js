import React, { Component } from 'react';
import './content.css'
import Manpower from './../../images/manpower.png'
import Carwash from './../../images/car-wash.png'
import Printing from './../../images/Prinitng.png'

//import Printing from './services/printing'


class content extends Component  {


    

    render () {


    return (
            <div>
                <div class="desktop-main-boxes">
                    <div className="container"> 
                        <h4 className="content-service-heading content-1"> What we do? </h4>
                        <h2 className="content-service-heading content-2">We make community of happy customers and strong bonds with our buisness partners by providing world class services</h2>
                        <div className="borderline"> </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4"> 
                                <div className="main-sub-box">
                                    <div className="row">
                                        <div className="col-md-12 boxes-image">
                                        <a href="/printing">
                                            <img src={Printing} className="boxes-image-image" />
                                            </a>
                                        </div>
                                    <h4 className="content-heading-b" value="printing"> Printing Solutions </h4>
                                        <p class="content-para-b"> With our advance Hardware, Software and Team of experts, we provide the best printing solution to our customers and business Partners at an unbeatable low price
                                        </p>
                                        <a className="content-para-b class-green" name="printing" href="/printing">Click here to check out our services</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4"> 
                                <div className="main-sub-box">
                                    <div className="row">
                                        <div className="col-md-12 boxes-image">
                                        <a href="/carwash">
                                            <img src={Carwash} className="boxes-image-image" />
                                            </a>
                                        </div>
                                    <h4 className=" content-heading-b"> Quality Car Wash </h4>
                                        <p class="content-para-b"> From using the latest technology to providing door to door car wash services, we are commited to make your car shine the brightest in the area at an exceptionally affordable price.
                                        </p>
                                        <a className="content-para-b class-green" href="/CarWash" >Click here to check all our services</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4"> 
                                <div className="main-sub-box">
                                    <div className="row">
                                        <div className="col-md-12 boxes-image">
                                        <a href="/ManpowerSupply">
                                            <img src={Manpower} className="boxes-image-image" />
                                            </a>
                                        </div>
                                        <h4 className=" content-heading-b"> ManPower Supply </h4>
                                        <p class="content-para-b"> We supply our Manpower on hourly basis for various roles in Industries as per their requirements. We give you liberity to chose from highly skilled to semi-skilled to unskilled. 
                                        </p>
                                        <a className="content-para-b class-green" name="manpower" href="/ManpowerSupply">Click here to check all our services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default content;