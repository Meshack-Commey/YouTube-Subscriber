import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor',
            subscribe: 'subscribe'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render(){
        //destructing state
        const {message, subscribe} = this.state 

        return(
                <div>
                    <h1>{message}</h1>
                    <button onClick={() => this.changeMessage()}>{subscribe}</button>
                </div>  
        )
    }
}

export default Message