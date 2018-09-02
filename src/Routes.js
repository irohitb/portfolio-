import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './container/home/index.js'
import Navigation from './UI/header/header.js'
import ContactUS from './UI/contactUS/contactUs.js'
import Printing from './container/Printing/printing.js'
import  ManpowerSupply from './container/ManpowerSupply/manpowersupply.js'
import  CarWash from './container/CarWash/carwash.js'

class Routes extends Component{
    render(){
        return  (
            <BrowserRouter>
            <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/printing" component={Printing} />
              <Route exact path="/CarWash" component={CarWash} />
              <Route exact path="/ManpowerSupply" component={ManpowerSupply} />

          </Switch>
          <ContactUS />
            </div>

          </BrowserRouter>
        )                       
    }
}

export default Routes;
