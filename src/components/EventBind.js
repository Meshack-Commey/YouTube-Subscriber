import React, { Component } from "react";

class EventBind extends Component{

    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    //clickHandler(){
        //this.setState({
            //message: 'Bosswell'
        //})
        //console.log(this)
    //}

    clickHandler = () => {
        this.setState({
            message: 'Bosswell'
        })
    }

    render(){
        const {message} = this.state
        return(
        
            <div>
                <p>{message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click again</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click again</button> */}
                <button onClick={this.clickHandler}>Click again</button>
            </div>
        )
    }
}

export default EventBind