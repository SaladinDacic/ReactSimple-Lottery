import React, { Component } from 'react'
import Lotto from "./Lotto";

class Lottery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numBalls: 6,
            maxNum: 40,
            numBalls2: 6,
            maxNum2: 40,
        }
        this.setState1 = this.setState1.bind(this)
        this.setState2 = this.setState2.bind(this)
    }
    setState2(){
        this.setState({numBalls:6, maxNum:40})
    }
    setState1(){
        this.setState({numBalls2:4, maxNum2:10})
    }
    render(){
        return(
            <div>
                <Lotto numBalls={this.state.numBalls} maxNum={this.state.maxNum}/>
                <button onClick={this.setState2}> Click Me</button>
                <Lotto numBalls={this.state.numBalls2} maxNum={this.state.maxNum2}/>
                <button onClick={this.setState1}> Click Me</button>
            </div>
        )
    }
}

export default Lottery;