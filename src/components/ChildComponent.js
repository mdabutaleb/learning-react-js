import React, {Component} from 'react'

function ChildComponent(props) {

    return (
        <div>
            <button onClick={() => props.greetHandler('Child component')}>Click</button>
        </div>
    );

}

export default ChildComponent
