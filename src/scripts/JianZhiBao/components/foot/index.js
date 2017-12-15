
import React,{Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"

@connect(
    (state)=>({...state})
)

export default class Foot extends Component{    
    render(){
        const {changeTitle} = this.props;
        return (
            <div className="foot">
                <ul>
                    {
                        this.props.footList.map((item,d)=>{
                            return (
                                <li key={d}>
                                    <Link to={item.path} activeClassName="active">
                                        <i className={"iconfont "+item.icon}></i>
                                    </Link>
                                    <span>{item.txt}</span>
                                </li>  
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} 