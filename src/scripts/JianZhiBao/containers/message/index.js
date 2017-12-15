import React,{Component} from "react"
import {browserHistory,Link} from "react-router"
export default class Message extends Component{
    componentWillMount(){
        if(!localStorage.username){
            browserHistory.push("/login");
        }
    }
    render(){
        return (
            <div className="message">
                <div className="message-title">消息</div>
                <div className="blank120"></div>
                <div className="message-wrap">
                    <div className="message-box">
                        <div className="message-box-top"></div>
                        <div className="pad30">
                            <p className="message-box-title c333">完善简历</p>
                            <p className="message-box-date c999">2017-11-18 10:21</p>
                            <p className="selfDef c666">10秒快速完善简历，提升求职效果120%，让更多企业找到你</p>
                        </div>
                        <div className="message-box-foot">
                            <p>立即完善 <i className="iconfont icon-right"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 