import React,{Component} from "react"
import ReactSwipe from "../../components/reactswipe";
import {browserHistory,Link} from "react-router"

export default class My extends Component{
    constructor(props){
        super(props);
        this.state={
            imgList:[]
        }
    }
    
    componentWillMount(){
        if(!localStorage.username){
            browserHistory.push("/login");
        }
    }
    exit=()=>{
        console.log("1");
        localStorage.clear();
        browserHistory.push("/");
    }

    render(){   
        return (
            <div>
                <div className="my-title"></div>
                <div className="mywrap">
                    <div className="register-title">
                        <div className="my-profile-photo">
                        <Link to={"/login"}>
                            <i className="iconfont icon-touxiang2"></i>
                        </Link>
                        </div>
                    </div>
                    <div className="mybox">
                        <div className="mydiv">
                            <i className="iconfont icon-jianli icon-left f45"></i>
                            <span>我的简历</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                        <div className="mydiv">
                            <i className="iconfont icon-wodeqianbao icon-left f45"></i>
                            <span>我的钱包</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                    </div>
                    <div className="mybox">
                        <div className="mydiv">
                            <i className="iconfont icon-shimingrenzheng icon-left f32"></i>
                            <span>实名认证</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                        <div className="mydiv">
                            <i className="iconfont icon-jiankangzheng icon-left f45"></i>
                            <span>健康证</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                        <div className="mydiv">
                            <i className="iconfont icon-xue icon-left f35"></i>
                            <span>学生证</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                        <div className="mydiv">
                            <i className="iconfont icon-yhk icon-left f32"></i>
                            <span>银行卡</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                    </div>
                    <div className="mybox">
                        <div className="mydiv">
                            <i className="iconfont icon-mima icon-left f45"></i>
                            <span>账户与安全</span>
                            <i className="iconfont icon-right icon-left f45"></i>
                        </div>
                        <div className="mydiv">
                            <i className="iconfont icon-yijianfankui icon-left f40"></i>
                            <span>意见反馈</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                        <div className="mydiv">
                            <i className="iconfont icon-wodegengduoshezhi icon-left f45"></i>
                            <span>更多设置</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                        <div className="mydiv">
                            <i className="iconfont icon-zhaopin icon-left f45"></i>
                            <span>我要招聘</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                        <div className="mydiv" onClick={this.exit}>
                            <i className="iconfont icon-tuichu icon-left f45 c3bc2a6"></i>
                            <span>退出登录</span>
                            <i className="iconfont icon-right icon-left"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 