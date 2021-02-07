import React, { Component } from 'react'
import "./Lotto.css";

class Lotto extends React.Component{
    static defaultProps = {
        numBalls: 6,
        maxNum: 40
    }
    render(){
        let balls = this.props.numBalls;
        let num = this.props.maxNum;
        let arr = makeArray(balls, num)
        console.log(arr)
        return(
            <div className="Lotto-body">
                {arr.map((val,i)=><p className="Lotto-p" key={i}>{val}</p>)}
            </div>
        )
    }
}
function makeArray(numBalls, maxNum=40) {
    let arr = [];
    while(numBalls > arr.length){
        arr.push(Math.floor(Math.random()*maxNum)+1)
    }
    return arr; 
}
export default Lotto;