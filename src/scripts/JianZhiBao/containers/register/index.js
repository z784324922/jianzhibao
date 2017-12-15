import React,{Component} from "react"
import {Link,browserHistory} from "react-router"
import axios from "axios";
import {connect} from "react-redux"
import {to_register} from "../../actions"
import {message } from 'antd';
@connect()

export default class Register extends Component{
    
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            _input:"",
            yanzheng:"",
            code:"",
            duanxin:""
        }
    }

    showCode=()=>{
        axios.post("http://route.showapi.com/932-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&length=4&specials=false")
        .then(res=>{
            var yanzheng = document.getElementById("yanzhen");
            yanzheng.innerHTML = '<img src="" id="code"/>';
            var code = document.getElementById("code");
            code.setAttribute("src",res.data.showapi_res_body.image);
            code.setAttribute("sid",res.data.showapi_res_body.sid);
            this.setState({
                code: res.data.showapi_res_body.sid
            });
        })
    }
    goBack=()=>{
        browserHistory.go(-1);
    }
    toregister=()=>{
        const {dispatch} = this.props;
        var username = this.state.username;
        var password = this.state.password;
        var duanxin = this.state.duanxin;
        var  _input = this.state._input;
        var code = this.state.code;
        var that = this;
        var _url = "http://route.showapi.com/932-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&checkcode="+ _input +"&sid=" + code;
        var istrue = true;
        axios.post(_url)
        .then(res=>{
            if (res.data.showapi_res_body.valid) {
                if(username.length==0){
                    message.error("用户名不能为空!",2);
                    istrue = false;
                }
                else if(!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(username)){
                    message.error("手机格式错误!",2);
                    istrue = false;
                }
                else if(password.length<6 || password.length>16){
                    message.error("密码不能小于6位或大于16位!",2)
                    istrue = false;
                }
                else if(!/^[a-zA-Z\d_]{6,16}$/.test(password)){
                    message.error("密码只能由字母数字下划线组成!",2)
                    istrue = false;
                }
            }
            else {
                    message.error("验证码错误",2)
                    istrue = false;
                    that.showCode();
            }
            if(istrue){
                dispatch(to_register(username,password));
                // const{islogin} = this.props;
                // if(!islogin){
                //     message.error("登录失败,用户名或密码错误",2)
                // }
            }
        }) 
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        });
    }
    handlePasswordChange=(event)=>{
        this.setState({
            password: event.target.value
        });
    }
    handleYanzhengChange=(event)=>{
        this.setState({
            _input: event.target.value
        });
    }
    handleDuanxinChange=(event)=>{
        this.setState({
            duanxin: event.target.value
        });
    }
    render(){
        const {dispatch} = this.props;
        console.log(this.props.route.goBack)
        return (
            <div>
                <div className="registertitle">
                    <p>
                    <a onClick={this.goBack}><i className="iconfont icon-back"></i></a>
                        <span>注册</span>
                    </p>
                </div>
                <div className="loginwrap">
                    <div className="logintext">
                        <i className="iconfont icon-shouji c999"></i>
                        <input type="text" placeholder="请输入手机号" className="c999" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="logintext">
                        <i className="iconfont icon-mima c999"></i>
                        <input type="password" placeholder="请输入6-20位数字密码" className="c999" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="logintext">
                        <i className="iconfont icon-anquan c999"></i>
                        <input type="text" placeholder="请输入图片验证码" className="c999" value={this.state._input} onChange={this.handleYanzhengChange}/>
                        <span id="yanzhen"></span>
                    </div>
                    <div className="logintext">
                        <i className="iconfont icon-duanxin c999"></i>
                        <input type="text" placeholder="请输入短信验证码" className="c999" value={this.state.duanxin} onChange={this.handleDuanxinChange}/>
                    </div>
                    <button className="register-btn" onClick={this.toregister}>注册</button>
                </div>
                <p className="register-protocol">
                    注册表示同意<span> 
                    <i className="iconfont icon-back"></i>
                    小劳招聘用户协议 
                    <i className="iconfont icon-right"></i> </span>
                </p>
            </div>
        )
    }
    componentDidMount(){
        this.showCode();
    }
}
