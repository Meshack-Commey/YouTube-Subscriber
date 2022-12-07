//Youtubers,your solution is here! Youtube Subscriber
//A simple application to  help you get MORE LIKES $ SUBSCRIBERS

import React, { Component } from 'react'

class Subscriber extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor, please press the subscription button to subscribe',
            subscribe: 'subscribe',
            subscribers: 0
        }
    }

    changeMessage(){
        this.setState({
            message: <div><button onClick={() => this.subscribers()}>subscribe</button></div>,
            subscribe: 'continue'
        })
    }

    subscribers(){
        this.setState(
            {
                subscribers: this.state.subscribers + 1 ,
                message: 'Thank you for subscribing'
            }, 
            () => {
                console.log(this.state.subscribers)
            })
    }

    render(){
        return(
                <div>
                    <p>{this.state.message}</p>
                    <p>Subscribers: {this.state.subscribers}</p>
                    <button onClick={() => this.changeMessage()}>{this.state.subscribe}</button>
                </div>  
        )
    }
}

export default Subscriber