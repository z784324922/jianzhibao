import axios from "axios";
import store from "../store";
// axios.defaults.baseURL = "http://47.94.208.182:3000";
axios.defaults.baseURL = "http://119.23.238.121:7700"; 

export function change_title(title){
    return {
        type:"change_title",
        title
    }
}

export function get_mv(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_mv_success",json})
        })
}

export function get_banner(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_banner_success",json})
        })
}

export function get_data(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_data_success",json})
        })
}


export function get_detail(url,a){
    return axios.get(url,{params:{jobId:a}})
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return store.dispatch({type:"get_detail_success",json})
        })
}

export function get_classify(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_classify_success",json})
        })
}

export function go_back(){
    return {
        type:"go_back"
    }
}

export function to_login(username,password){
    console.log(username,password)
    return axios.post("/user/login",{
        username:username,
        password:password
    })
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return store.dispatch({type:"to_login_success",json,username})
    })
}

export function to_register(username,password){
    console.log(username,password)
    return axios.post("/user/register",{
        username:username,
        password:password
    })
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return store.dispatch({type:"to_register_success",json})
    })
}

export function to_sign(jobsid,username){
    console.log(jobsid)
    console.log(username);
    return axios.post("/sign",{
        username:username,
        jobsid:jobsid
    })
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return store.dispatch({type:"to_sign_success",json})
    })
}

export function get_sign_detail(url,username){
    return axios.get(url,{params:{username:username}})
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return store.dispatch({type:"get_sign_detail_success",json})
    })
}

export function to_delete_sign(username,jobId){
    return axios.post("/delete",{
        username:username,
        jobId:jobId
    })
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return store.dispatch({type:"to_delete_sign_success",json})
    })
}