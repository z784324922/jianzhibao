import React,{Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import axios from "axios";
import Homehead from "../../components/homehead"
import {Carousel } from "antd"
import {get_data,get_detail} from "../../actions"

@connect(
    (state)=>({...state})
)
export default class Home extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_data("/jingxuan",dispatch));
    }
    render(){
        const {data} = this.props;
        return (
            <div className="home">
                <Homehead />
                <div className="banner">
                    <Carousel autoplay >
                    {
                        data.map((item,idx)=>{
                        var a =item.banner.map((item,id)=>{
                            return (
                                <div key={id} >
                                    <img src={item.banner} />
                                </div>
                            )
                        })

                        return a;
                        })
                        
                    }
                    </Carousel>
                </div>
                <nav>
                    <ul>
                        {
                            data.map((item,idx)=>{
                                var a =item.ContentOperation.map((item,id)=>{
                                    return (
                                        <Link to={{pathname:"/classify/"+item.title+"/"+item.rule,state:item.rule}}>
                                            <li key={id} >
                                                <img src={item.iconURL} />
                                                <span className="c666">{item.title}</span>
                                            </li>
                                        </Link>
                                    )
                                })
                                return a;
                            })
                        }
                    </ul>
                </nav>
                {
                    data.map((item,idx)=>{
                        var a =item.data.map((item,id)=>{
                            return (
                                <div className="list" key={id} >
                                    <div className="h10 bf1f1f1"></div>
                                    <Link to={{pathname:"/jobsdetail",state:item.jobId}}>
                                        <div className="listbox">
                                            <div className="listbox-left">
                                                {
                                                    <img src={item.logoURL} />
                                                }
                                            </div>
                                            <div className="listbox-right">
                                                <p className="list-title">{item.name}</p>
                                                <p className="district">
                                                    <i className="iconfont icon-location_light"></i>
                                                    <span className="circle c999">{item.district}{item.circle}(距我{item.distance/1000}km)</span>
                                                    <span className="salary">{item.salary}</span>
                                                </p>
                                                <p className="worktime">
                                                    <i className="iconfont icon-countdown c999"></i>
                                                    <span className="interviewDateStr c999">{item.interviewDateStr}</span>
                                                    <span className="billingCycle c999">{item.billingCycle}</span>
                                                </p>
                                                <p className="customerLevelTips">
                                                    <img src={item.packageIcon} />
                                                    <span className="c999">{item.customerLevelTips}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        return a;
                    })
                }
                    
            </div>
        )
    }
    componentDidMount(){
        // showCode();
    }
} 

// function showCode(){
//     var url = "http://ip.taobao.com/service/getIpInfo.php?ip="+"222.209.10.247"
//     axios.get(url)
//     .then(res=>{
//         var yanzheng = document.getElementById("baidu_geo");
//         console.log(res.data);
//     })
// }