import React from "react";

const About = (props) => {
    return(
        <div>
            <br/>
            <p>This is about page</p>
            <button onClick={() => props.greetHandler('Also hello from About page')}>Click</button>
        </div>
    )
}
export default About;
