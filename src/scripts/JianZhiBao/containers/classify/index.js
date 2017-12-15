import React,{Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import SubHead from "../../components/subHead"
import {get_classify} from "../../actions"

@connect(
    (state)=>({...state})
)
export default class Classify extends Component{

    componentWillMount(){
        const {dispatch} = this.props;
        // console.log(this.props.location.state);
        dispatch(get_classify("/"+this.props.location.state,dispatch));
    }

    goback=()=>{
        this.props.router.goBack();
    }
    render(){
        const {classify} = this.props;
        return (
            <div className="classify">
                <SubHead  pTitle={this.props.params.title}/>
                <div className="h110"></div>
                {
                    classify.map((item,id)=>{
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
                }
            </div>
        )
    }
} 