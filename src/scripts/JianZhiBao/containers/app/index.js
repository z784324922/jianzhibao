
import React,{Component} from "react"

import Foot from "../../components/foot"

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {connect} from "react-redux"
export default class App extends Component{

    render(){
        return (
            <div className="moveIn">
                <ReactCSSTransitionGroup
                    transitionName = {
                        {
                            enter: 'enter',
                            leave: 'leave',
                        }
                    }
                    transitionLeave={true}
                    transitionEnter={true}
                    transitionLeaveTimeout = {800}
                    transitionEnterTimeout = {800}
                    >
                     <div key={this.props.children.pathname}>
                        {this.props.children}
                    </div>
                    </ReactCSSTransitionGroup>
               
                <Foot changeTitle={this.changeTitle}/>
            </div>
        )
    }

    componentDidMount(){
        const {location} = this.props;
    }
} 