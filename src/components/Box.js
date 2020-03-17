
import React, {Component} from 'react'
class Box extends Component {
    render(){
        return(
            <div className={this.props.color}>
                <h1>{this.props.name}</h1>
                <div>{this.props.color}</div>
                <div>{this.props.win ? 'Win' : 'Loss'}</div>
            </div>
        )
    }
}

export default Box