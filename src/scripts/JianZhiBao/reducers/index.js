var initState = {
    footList:[
        {path:"/home",txt:"首页",icon:"icon-home_light"},
        {path:"/signup",txt:"报名",icon:"icon-group_fill_light"},
        {path:"/message",txt:"消息",icon:"icon-mark"},
        {path:"/my",txt:"我",icon:"icon-people"},
    ],
    headTitle:"兼职宝",
    homenav:[
        {path:"/home",txt:"精选"},
        {path:"/my",txt:"推广"},
        {path:"/my",txt:"派单"},
        {path:"/my",txt:"服务员"},
        {path:"/my",txt:"销售"},
    ],
    navList:[{name:"全部"},{name:"审核中"},{name:"待面试"},{name:"已面试"}],
    banner:[],
    mv:[],
    data:[],
    detail:[],
    details:[],
    classify:[],
    username:"",
    password:"",
    yanzheng:"",
    islogin:false,
    isregister:"",
    sign:[],
    delete_message:""
}
import {browserHistory} from "react-router"
import {message } from 'antd';

export default (state=initState,action)=>{
    switch(action.type){
        
        case "change_title":
        state.headTitle = action.title;
        return Object.assign({},state);
        break;

        case "get_mv_success":
        state.mv = action.json;
        return Object.assign({},state);
        break;

        case "get_data_success":
        state.data = action.json;
        return Object.assign({},state);
        break;

        case "get_detail_success":
        state.details = action.json;
        state.detail = action.json[0];
        return Object.assign({},state);
        break;
 
        case "get_sign_detail_success":
        state.sign = action.json;
        return Object.assign({},state);
        break;
        
        case "get_banner_success":
        state.banner = action.json;
        return Object.assign({},state);
        break;

        case "get_classify_success":
        state.classify = action.json;
        return Object.assign({},state);
        break;
        
        case "to_delete_sign_success":
        if(state.delete_message=="删除成功!"){
            message.success("删除成功!",2);
            location.reload();
        }
        state.delete_message = action.json;
        return Object.assign({},state);
        break;

        case "go_back":
        browserHistory.go(-1);
        return Object.assign({},state);
        break;

        case "to_login_success":
        if(state.islogin=="登录成功!"){
            message.success("登录成功!",2);
        }
        state.islogin = action.json;
        state.username = action.username;
        if(state.islogin=="登录成功!"){
            console.log("登录成功!");
            localStorage.username=state.username;
            browserHistory.push("/");
        }
        return Object.assign({},state);
        break;

        case "to_register_success":
        if(state.isregister=="插入成功!"){
            message.success("注册成功!",2);
        }
        if(state.isregister=="插入失败!"){
            message.error("注册失败,用户名已注册!",2);
        }
        state.isregister = action.json;
        if(state.isregister=="插入成功!"){
            console.log("注册成功!");
            browserHistory.push("/login");
        }

        case "to_sign_success":
        if(state.isregister=="报名成功!"){
            message.success("报名成功!",2);
        }
        if(state.isregister=="报名失败!"){
            state.isregister = "";
            message.error("你已报名,请勿重复报名!",2);
            return Object.assign({},state);
            break;
        }
        state.isregister = action.json;
        if(state.isregister=="报名成功!"){
            console.log("报名成功!");
            // browserHistory.push("/login");
        }
        return Object.assign({},state);
        break;

        default:
        return Object.assign({},state);
        break;
    }
}