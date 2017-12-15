import React,{Component} from "react"
import axios from "axios";
import {browserHistory,Link} from "react-router"
import {connect} from "react-redux"
import {get_sign_detail,to_delete_sign} from "../../actions"
import "../../../utils/swiper-3.3.1.min.js"

@connect(
    (state)=>({...state})
)
export default class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            swiperIndex:0
        }
    }
    changeIndex=(i)=>{
        this.mySwiper.slideTo(i,100)
    }
    componentWillMount(){
        if(!localStorage.username){
            browserHistory.push("/login");
        }
        const {dispatch} = this.props;
        dispatch(get_sign_detail("/findSign",localStorage.username));
    }
    to_delete(id){
        console.log(id);
        const {dispatch} = this.props;
        dispatch(to_delete_sign(localStorage.username,id));
    }

    render(){
        const {navList,sign,delete_message} = this.props;
        const {swiperIndex}=this.state;
        console.log(sign);
        if(sign=="没有报名"){
            console.log(0);
            return (
                <div className="message">
                    <div className="message-title">报名进度</div>
                    <div className="blank120"></div>
                    <div className="signup-nav">
                        <ul>
                            {
                                navList.map((item,index)=>{
                                    return(
                                        <li key={index} onClick={()=>{this.changeIndex(index)}} className={swiperIndex==index?"nav_active":""}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="swiper-container" id="swiper-c">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide_1">
                                <div className="no-message">
                                    <img src={require("../../../../assets/images/no-content.png")}/>
                                </div>
                            </div>
                            <div className="swiper-slide slide_2">
                                <div className="no-message">
                                    <img src={require("../../../../assets/images/no-content.png")}/>
                                </div>
                            </div>
                            <div className="swiper-slide slide_1">
                                <div className="no-message">
                                    <img src={require("../../../../assets/images/no-content.png")}/>
                                </div>
                            </div>
                            <div className="swiper-slide slide_2">
                                <div className="no-message">
                                    <img src={require("../../../../assets/images/no-content.png")}/>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            console.log(1);
            return (
                <div className="message">
                    <div className="message-title">报名进度</div>
                    <div className="blank120"></div>
                    <div className="signup-nav">
                        <ul>
                            {
                                navList.map((item,index)=>{
                                    return(
                                        <li key={index} onClick={()=>{this.changeIndex(index)}} className={swiperIndex==index?"nav_active":""}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="swiper-container" id="swiper-c">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide_1">
                                {
                                    sign.map((item,idx)=>{
                                        return(
                                            <div key={idx} className="all-sign">
                                                <div  className="sign-box">
                                                    <div className="sign-box-left">
                                                        <img src={item.logoURL}/>
                                                    </div>
                                                    <div className="sign-box-right">
                                                        <p className="jobsname c333">{item.name}</p>
                                                        <p className="mianshi c999">{item.interviewStartDate}至{item.interviewEndDate}
                                                            <span className="state">审核中</span>
                                                        </p>
                                                        <p className="salary">{item.salary}</p>
                                                        <p className="delete">
                                                            <span onClick={this.to_delete.bind(this,item.jobId)}><i className="iconfont icon-shanchu c999"></i>删除</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="sign-bottom"></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-slide slide_2">
                                <div className="no-message">
                                    <img src={require("../../../../assets/images/no-content.png")}/>
                                </div>
                            </div>
                            <div className="swiper-slide slide_1">
                                <div className="no-message">
                                    <img src={require("../../../../assets/images/no-content.png")}/>
                                </div>
                            </div>
                            <div className="swiper-slide slide_2">
                                <div className="no-message">
                                    <img src={require("../../../../assets/images/no-content.png")}/>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    }

    componentDidMount(){
        const {swiperIndex} = this.state
        var that = this
        this.mySwiper = new Swiper("#swiper-c",{
            loop:false,
            autoplay: false,
            direction:"horizontal",
            pagination: '.swiper-pagination',
            resistanceRatio:0,
            calculateHeight:true,
            initialSlide:0,
            autoHeight:true,
            onSlideChangeEnd(swiper){
                that.setState({
                    swiperIndex:swiper.activeIndex
                })
            }    
        });
    }
} 