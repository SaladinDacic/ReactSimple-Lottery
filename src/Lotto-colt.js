import React, { Component } from 'react';
import "./Lotto-colt.css"
class LottoColt extends React.Component{
    static defaultProps ={
       
    }
    render(){
        return(
            <div className="LottoColt-ball">{this.props.num}</div>
        )
    }
}

export default LottoColt;