import React, { Component } from 'react'
import LottoColt from "./Lotto-colt";

class LotteryColt extends React.Component{
    static defaultProps = {
        maxNum: 40,
        numBall: 6,
        title: "Lottery"
    }
    constructor(props){
        super(props);
        this.state = {
            arr : Array.from({length: this.props.numBall})
        }
        this.makeArray = this.makeArray.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    makeArray() {
        this.setState(currState => (
            {
                arr: 
                currState.arr.map(
                    val => val = Math.floor(Math.random()*this.props.maxNum)+1
                )
            }))
        
    }
    handleClick(){
        this.makeArray()
    }
    render(){

        return(
            <div>
                <section className="Lottery">
                    <h1>{this.props.title}</h1>
                    <div>
                        {this.state.arr.map((val,i)=>(
                            <LottoColt key={i} num={val}/>
                        ))}
                    </div>
                    <button onClick={this.handleClick}>Generate</button>
                </section>
            </div>
        )
    }
}

export default LotteryColt;