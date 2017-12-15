
import React,{Component} from "react"
import {browserHistory,Link} from "react-router"
import {connect} from "react-redux"

@connect(
    (state)=>({...state})
)
export default class HomeHead extends Component{

    goBack=()=>{
        browserHistory.go(-1);
    }

    render(){
        return (
            <div className="home-title">
                <div className="home-title-box" id="">
                    <div className="left">
                        <i className="iconfont icon-location"></i>
                        <span className="city">成都</span>
                    </div>
                    <div className="midddle">
                        <div className="parttime-job active">看兼职</div>
                        <div className="fulltime-job">看全职</div>
                    </div>
                </div>
                <div className="home-nav">
                    <ul>
                        {
                            this.props.homenav.map((item,d)=>{
                                return (
                                    <li key={d}>
                                        <Link to={item.path} activeClassName="active">
                                            <span>{item.txt}</span>
                                        </Link>
                                    </li>  
                                )                                                                                                                                                                         
                            })
                        }       
                    </ul>
                </div>
            </div>
        )
    }
} 