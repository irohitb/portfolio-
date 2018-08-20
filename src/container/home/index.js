import React, { Component } from 'react';
import Header from './../../UI/header/header.js';
import OpeningContent from './openingContent.js';
import Content from './content.js';
import ContactUs from './contactUs.js';


class Homepage extends Component {

    render () {
        return (
            <div>
            <Header />
            <OpeningContent />
            <Content />
            <ContactUs />
            </div>
        )
    }

}

export default Homepage;
