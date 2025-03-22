import "./DestinationStyles.css"
import { Component } from "react"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.cName}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.image1}/>
                    <img alt="img" src={this.props.image2}/>
                </div>
            </div>
        )
    }
}

export default DestinationData;