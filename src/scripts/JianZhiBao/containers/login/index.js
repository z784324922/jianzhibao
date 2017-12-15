import React,{Component} from "react"
import {Link,browserHistory} from "react-router"
import {connect} from "react-redux"
import axios from "axios";
import {to_login} from "../../actions"
import {message } from 'antd';
@connect(
    (state)=>({...state})
)
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            _input:"",
            yanzheng:"",
            code:""
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
    goHome=()=>{
        browserHistory.push("/");
    }
    tologin=()=>{
        const {dispatch} = this.props;
        var username = this.state.username;
        var password = this.state.password;
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
                else if(password.length==0){
                    message.error("密码不能为空!",2);
                    istrue = false;
                }

            }
            else {
                    message.error("验证码错误",2)
                    istrue = false;
                    that.showCode();
            }
            if(istrue){
                dispatch(to_login(username,password));
                const{islogin} = this.props;
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
    componentWillMount(){
        const {islogin} = this.props;
    }
    render(){
        return (
            <div>
                <div className="logintitle">
                    <p>
                    <a onClick={this.goHome}><i className="iconfont icon-back"></i></a>
                        <span>登录</span>
                    </p>
                </div>
                <div className="loginwrap">
                    <div className="logintext">
                        <i className="iconfont icon-shouji c999"></i>
                        <input type="text" placeholder="请输入手机号" className="c666" ref="phone" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="logintext">
                        <i className="iconfont icon-anquan c999"></i>
                        <input type="text" placeholder="请输入验证码" className="c666" ref="yanzheng" value={this.state._input} onChange={this.handleYanzhengChange}/>
                        <span id="yanzhen"></span>
                    </div>
                    <div className="logintext">
                        <i className="iconfont icon-mima c999"></i>
                        <input type="password" placeholder="请输入密码" className="c666" ref="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="loginbottom">
                        <input type="checkbox" className="checkbox"/>
                        <span className="c999">记住密码</span>
                        <Link to={"/"} style={{fontSize:25}}>忘记密码?</Link>
                    </div>
                    <button onClick={this.tologin}>登录</button>
                    <div className="register">
                        <Link to={"/register"} style={{fontSize:25}}>新用户注册</Link>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.showCode()
    }
}
 
// function showCode(){
    
// }