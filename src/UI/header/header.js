import React from 'react';
import NavImage from "./../../images/1234.png";
import './header.css';

const header = () => {

        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    <img src={NavImage} width="50" height="50" class="d-inline-block align-top" alt="" />
                 </a>
                  <p class="nature-logo">  Nature Life </p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Printing </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Manpower Supply</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Car Wash </a>
                    </li>
                    </ul>
                </div>
            </nav>
            </div>

        )
    }



export default header;
