import React, {Component} from "react";

class Message extends Component {

    //constructor
    constructor() {
        super();
        this.state = {
            'Message': 'Welcome visitor!',
        }
    }

    // handling on click event after buttton click
    changeMessage() {
        this.setState(
            {
                Message: 'Thanks for subscription!',
            }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe Here</button>
            </div>

        );
    }
}

export default Message
