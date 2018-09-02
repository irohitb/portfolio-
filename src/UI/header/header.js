import React from 'react';
import NavImage from "./../../images/1234.png";
import './header.css';

const header = () => {

        return (
            <div>
            <div className="d-none d-md-block ">
<nav class="navbar navbar-expand-md navbar-light ">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/printing">Printing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Carwash">Carwash</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/ManpowerSupply">Manpower Supply</a>
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
           <img src={NavImage} width="120" height="120" class=""/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="mailto:info@naturelifeservices.com">info@naturelifeservices.com</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="callto:+97470390100">+97470390100</a>
            </li>
        </ul>
    </div>
</nav>
</div>
 <div className="d-block d-md-none">
 <nav class="navbar navbar-expand-lg navbar-light">
     <a class="navbar-brand" href="#">
         <img src={NavImage} width="120" height="120" class="d-inline-block align-top" alt="" />
      </a>

     <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon navbar-dark"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
         <li class="nav-item">
             <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item">
             <a class="nav-link" href="/printing">Printing </a>
         </li>
         <li class="nav-item">
             <a class="nav-link" href="/ManpowerSupply">Manpower Supply</a>
         </li>
         <li class="nav-item">
             <a class="nav-link" href="/carwash">Car Wash </a>
         </li>
         <li class="nav-item">
                <a class="nav-link" href="mailto:info@naturelifeservices.com">info@naturelifeservices.com</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="callto:+97470390100">+97470390100</a>
            </li>
         </ul>
     </div>
 </nav>
 </div>
 </div>

        )
    }



export default header;


      
           