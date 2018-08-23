import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './container/home/index.js'
import Navigation from './UI/header/header.js'
import ContactUS from './UI/contactUS/contactUs.js'

class Routes extends Component{
    render(){
        return  (
            <BrowserRouter>
            <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={HomePage} />
          </Switch>
          <ContactUS />
            </div>

          </BrowserRouter>
        )                       
    }
}

export default Routes;
