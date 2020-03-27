import React from "react";

const FunctionClick = () => {
    function clickHandler() {
        alert('Clicked on button')
    }

    return (
        <div>
            Clicking the button from function component
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;
