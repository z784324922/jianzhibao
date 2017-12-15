import React,{Component} from "react"
import {connect} from "react-redux"
import {get_detail} from "../../actions"
import Jobsfoot from "../../components/jobsfoot"
@connect(
    (state)=>({detail:state.detail,details:state.details})
)
export default class Wechat extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_detail("/detail",this.props.location.state));
    }
    goback=()=>{
        this.props.router.goBack();
    }
    render(){
        const {detail,details} = this.props;
        console.log(detail);
        return (
            <div className="jobsdetail">
                <div className="detail-title">
                    <p>
                        <a onClick={this.goback}><i className="iconfont icon-back"></i></a>
                        <span>兼职详情</span>
                    </p>
                </div>
                <div className="detail-top">
                    <p className="p1 c666">
                        <span className="title">
                            {detail.title}
                        </span>
                        <span className="detialSalary">
                            {detail.detialSalary}
                        </span>
                    </p>
                    <p className="p2">
                        <span className="jieshao">
                            {detail.jobType}&nbsp;&nbsp;|&nbsp;&nbsp;
                            招聘{detail.number}人&nbsp;&nbsp;|&nbsp;&nbsp;
                            {detail.staffRequire}
                        </span>
                        <span className="detialPayingModeDesc c999">{detail.detialPayingModeDesc}</span>
                    </p>
                    <span className="welfare">送小礼品</span>
                    <span className="welfare left15">节日福利</span>
                </div>
                <div className="notice">
                    <i className="iconfont icon-anquan"></i>
                    <span>{detail.notice}</span>
                </div>
                <div className="f4f4f4 h25"></div>
                <div className="detail-message">
                    <div className="message-left">
                        <p className="pp">面试时间</p>
                        <p className="pp">面试地点</p>
                        <p className="workplace">工作地点</p>
                    </div>
                    <div className="message-right">
                        <p className="p1">{detail.interviewDateStr}</p>
                        <p className="p1 p2">
                            {detail.interviewDistrict}-{detail.interviewCircle}-{detail.interviewLocation}
                            <i className="locationico iconfont icon-location"></i>
                        </p>
                        
                        {
                            details.map((item,idx)=>{
                            var a =item.jobLocations.map((item,id)=>{
                                return (
                                    <p key={id} className="localtion">
                                        <span>{item.district}-{item.circle}-{item.location}</span> 
                                        <i className="locationico iconfont icon-location"></i>
                                    </p>
                                )
                            })

                                return a;
                            })
                        }
                    </div>
                </div>
                <div className="f4f4f4 h25"></div>
                <div className="shortName">
                    <i className="ileft iconfont icon-calendar">
                       
                    </i>
                    <div className="middle-name">
                        <p className="middle-name-top">
                            {detail.shortName}{detail.customerLevelTips}
                        </p>
                        <p className="middle-name-bottom">
                            <img src= {detail.packageIcon}/>
                            <span>{detail.packageDes}</span>
                        </p>
                    </div>   
                    <i className="iright iconfont icon-right">
                       
                    </i>  
                </div>
                <div className="f4f4f4 h25"></div>
                <div className="salaryDesc mr30">
                    <p className="salaryDesc-title">
                        【薪酬描述】
                    </p>
                    <p className="cotent">
                        {detail.salaryDesc}
                    </p>
                </div>
                <div className="detialWorkingContent mr30">
                    <p className="detialWorkingContent-title">
                        【工作内容】
                    </p>
                    <p className="cotent">
                        {detail.detialWorkingContent}
                    </p>
                </div>
                <Jobsfoot jobsid={detail.id}/>
            </div>
        )
    }
} 