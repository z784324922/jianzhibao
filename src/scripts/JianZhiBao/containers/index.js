import React, {Component} from "react"
import {render} from "react-dom"
import {hashHistory,Router,Route, IndexRedirect,Redirect} from "react-router"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import App from "./app"
import Home from "./home"
import Signup from "./signup"
import Message from "./message"
import My from "./my"
import Classify from "./Classify"

import Login from "./login"
import Rigister from "./register"
import Jobsdetail from "./jobsdetail"

export default class Layout extends Component{
    render(){
        const {dispatch} = this.props;
        return(
            <Router history={hashHistory}>
                <Redirect from="/jzb/dist" to="/" />
                <Route path="/" component={App}>
                    <IndexRedirect to="/home" />
                    <Route path="home" component={Home}/>
                    <Route path="signup" component={Signup}/>
                    <Route path="message" component={Message}/>
                    <Route path="my" component={My}/>
                </Route>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Rigister}/>
                <Route path="/jobsdetail" component={Jobsdetail}/>
                <Route path="/classify/:title/:rule" component={Classify}/>
            </Router>
        )   
    }      
}