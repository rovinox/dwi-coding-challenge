import React from 'react';
import {Switch, Route} from "react-router-dom"
import Home from "../src/components/Home"
import Offer from "../src/components/Offer"
import ZipCode from "./components/ZipCode"

export default (    
    <Switch>
        <Route path="/zipcode" component={ZipCode}/>
        <Route path="/offer" component={Offer}/>
        <Route path="/" component={Home}/>

        


    </Switch>
)