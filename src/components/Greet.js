import React from 'react';

{/*
function Greet(props){
    console.log(props)
    return <h1>Hello {props.name}, you are highly {props.description} with React</h1>
}


const Greet = props => {
    console.log(props)
    return(
            <div>
                `<h1>Accept my { props.name }, { props.description }</h1>
                {props.children}
            </div>
    )
}


//destructing props and states in the parameter
const Greet = ({name, description}) => {
    return(
            <div>
                `<h1>Accept my {name}, {description}</h1>
                
            </div>
    )
}
*/}

//destructing props and states in the function body
const Greet = (props) => {

    const {name, description} = props

    return(
            <div>
                `<h1>Accept my {name}, {description}</h1>
                
            </div>
    )
}

export default Greet;