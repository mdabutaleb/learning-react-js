import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super();
        this.state = {
            Counter: 0,
        }
    }

    increment() {
        // it will not run 5 times
        // this.setState({
        //     Counter: this.state.Counter + 1,
        // }, () => {
        //     console.log(this.state.Counter)
        // })
        // console.log(this.state.Counter)

        this.setState((prevState) => ({
            Counter: prevState.Counter + 1
        }), () => {
            console.log(this.state.Counter)
        });
    }

    incrementFiveTimes(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.Counter}</div>
                <button onClick={() => this.incrementFiveTimes()}>Increment</button>
            </div>
        );
    }
}

export default Counter;
