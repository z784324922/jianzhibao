import React,{Component} from "react"
import {browserHistory} from "react-router"

export default class SubHead extends Component{

    static propTypes ={
        pTitle:React.PropTypes.string
    }

    goBack=()=>{
        browserHistory.go(-1);
    }

    render(){
        return (
            <header className="classifyhead">
                <p>
                    <a onClick={this.goBack}>
                        <i className="iconfont icon-back"></i>
                    </a> 
                    <span >{this.props.pTitle}</span>  
                </p>
            </header>
        )
    }
} 