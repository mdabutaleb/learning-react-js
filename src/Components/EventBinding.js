import React, {Component} from "react";

class EventBinding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: 'Hello!'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            Message: 'Goodbye!'
        })
    }

    myClickHandler = () => {
        this.setState({
            Message: 'Goodbye Sumon!'
        })
    }
    render() {

        return (
            <div>
                {this.state.Message}
                <br/>
                {/*event binding with callback function: Performance issues*/}
                {/*<button onClick={() => this.clickHandler()}>Click</button>*/}

                {/*event binding with bind method: It's performance issue*/}
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}

                {/*Best way of event binding in the constructor*/}
                {/*<button onClick={this.clickHandler}>Click</button>*/}

                <button onClick={this.myClickHandler}>Click</button>

            </div>
        );
    }


}

export default EventBinding;
