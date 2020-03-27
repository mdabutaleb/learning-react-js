import React, {Component} from "react";

class EventBindingPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'Message': 'Welcome user!'
        }
        this.ChangeMessage = this.ChangeMessage.bind(this)
    }

    ChangeMessage() {
        this.setState({
            Message: 'GoodBye!'
        })
    }

    myEventHandler = () => {
        this.setState({
            Message: 'Goodbye! This message from event handling function'
        })
    }

    render() {
        return (
            <div>
                {this.state.Message}<br/>
                {/*Event binding with callback function but performance issues*/}
                {/*<button onClick={() => this.ChangeMessage()}>Change Message</button>*/}

                {/*Event binding while click but is also performance issue*/}
                {/*<button onClick={this.ChangeMessage.bind(this)}>Change Message</button>*/}

                {/*This is good way of event binding*/}
                {/*<button onClick={this.ChangeMessage}>Change Message</button>*/}


                {/*this is also good way of event handling*/}
                <button onClick={this.myEventHandler}>Change Message</button>
            </div>
        );
    }
}

export default EventBindingPractice;
