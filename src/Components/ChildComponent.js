import React from "react";

const ChildComponent = (props) => {

    return (
        <div style={{'border': '1px solid red'}}>
            <br/>
            <p>This content is from child component </p>
            <button onClick={() => props.greetHandler('Content from child component')}>Load Content from main content</button>
        </div>
    )
}
export default ChildComponent;
