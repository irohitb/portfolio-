import React, { Component } from 'react';
import Header from './../../UI/header/header.js';
import OpeningContent from './openingContent.js';
import Content from './content.js';
import ContactUs from './../../UI/contactUS/contactUs.js';


class Homepage extends Component {

    render () {
        return (
            <div>
            <OpeningContent />
            <Content />
            </div>
        )
    }

}

export default Homepage;
