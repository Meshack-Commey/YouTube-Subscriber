import React, { Component } from 'react'
import './menu.css';

class Menu extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>News</li>
            </ul>
        );
    }
}

export default Menu;