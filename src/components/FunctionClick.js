import React, {Component} from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Function click button has been clicked')
    }
    return (
        <div>
            <button>Function Click</button>
        </div>
    )
}