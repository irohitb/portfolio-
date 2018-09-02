import React, { Component } from 'react';
import './openingContent.css';
import ScrollAnimation from './../../UI/ScrollAnimation/scrollAnimation.js'
class openingContent extends Component {



  render () {

    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
      var that = this;
      var delta = 300 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };

    return (

      <div>
        <div class="overlay">
            <div class="openingContent" id="header1"></div>
            <div className="d-block d-md-none">
              <h2 class="opening-content-header-m">Welcome to Nature Life website <br/> <p className="sub-span-class">We expertise in providing services for 
                  <span
                  class="txt-rotate"
                  data-period="2000"
                  data-rotate='[ " Printing", " Car Wash", " Manpower Supply"]'>
                  </span> </p>
              </h2>
            </div>
            <div className="d-none d-md-block">
            <h2 class="opening-content-header-d">Welcome to Nature Life website   </h2> 
            <p className="opening-heading-margin-top">We expertise in providing services for 
                  <span
                  class="txt-rotate"
                  data-period="2000"
                  data-rotate='[ " Printing", " Car Wash", " Manpower Supply"]'>
                  </span> 
              </p>
            
            </div>
          <ScrollAnimation />
        </div>
    </div>
    )

 }
}


export default openingContent;
