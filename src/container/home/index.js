import React, { Component } from 'react';
import OpeningContent from './openingContent.js';
import Content from './content.js';



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
