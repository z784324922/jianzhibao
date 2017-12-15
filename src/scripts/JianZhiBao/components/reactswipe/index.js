
import React ,{Component} from "react";
import Swiper from "../../../utils/swiper-3.3.1.min.js";

export default class ReactSwipe extends Component{

    static defaultProps = {
        swipe:null
    }

    render(){
        
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.children.map((child,idx)=>{
                            return (
                              <div className="swiper-slide" key={idx}>{child}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    // componentDidMount(){
    //     console.log("mount ssssssssssssssss")
    //     const {swipeOptions} = this.props;
    //     const swipe = new Swiper(".swiper-container",swipeOptions)
    // }

    componentDidUpdate(){
        console.log(1111111122222222222)
        const {swipeOptions} = this.props;
        const swipe = new Swiper(".swiper-container",swipeOptions)
    }
}