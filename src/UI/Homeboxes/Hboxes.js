import React from 'react'
import TestImage from './../../images/printing.jpg'
import './Hboxes.css';


const images = require.context( "./../../images/", true)

const homeBoxes = (props) => {

    //let image = images("./" + props.image)

    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="d-none d-md-block">
                        <div className="col-md-5 col-lg-5">
                            <div className="Home-box-image">
                                <img src={TestImage} class="rounded img-box-1" alt="..."></img>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="Home-box-text"> 
                                <p> This is a sample text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homeBoxes;