import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            countName: 'count - ',
            count: 0 ,
            increment: 'Increment'
        }
    }

    increment(){

    {/* my own example: this is a wrong senario
        this.state.count = this.state.count + 1
        console.log(this.state.count)
        this.setState({
            count: this.state.count
        }) 
    */}

    {/* lecturers simple example 
        this.setState({
            count: this.state.count + 1
        }, 
        () => {
            console.log('Call back value ', this.state.count)
        })
        console.log(this.state.count)
    */}

    //lectures complex example
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    
} //end of increment()
    
    

    //increment by five
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    ///* Lecturer's notes on setState method:
        //Always make use of setState and never modify the state directly
        //code has to be executed after the state has been updated? place that code in the call back function
        //which is the second argument to the setState method
    

    render(){
        return(
                <div>
                    <p>{this.state.countName} {this.state.count}</p>
                    <button onClick={() => this.incrementFive()}>{this.state.increment}</button>
                </div>
        )
    }
}

export default Counter