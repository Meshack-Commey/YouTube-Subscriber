import React from 'react'

const Hello = () => {
    //return(
        //<div>
            //<h1>Hello JSX Mesh</h1>
        //</div>
    //)
    return React.createElement(
        'div',
        null,
        React.createElement('h3', null, 'Hello JSX MeshCom')
    )
}

export default Hello