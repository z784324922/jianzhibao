import React,{Component} from "react"
import {Link,browserHistory} from "react-router"
import {connect} from "react-redux"
import {to_sign} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Jobsfoot extends Component{    
    
    toSign=()=>{
        if(!localStorage.username){
            browserHistory.push("/login");
        }else{
            const {dispatch,jobsid} = this.props;
            var username = localStorage.username;
            dispatch(to_sign(jobsid,username));
        }  
    }
    render(){
        const {jobsid} = this.props;
        console.log(jobsid);
        return (
            <div className="jobsfoot">
                <div className="phone">
                    报名后可查看联系方式
                </div>
                <div className="baoming" onClick={this.toSign}>
                    立即报名
                </div>
            </div>
        )
    }
} 