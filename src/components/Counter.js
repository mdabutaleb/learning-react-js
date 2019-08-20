import React, {Component} from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('this is callback value', this.state.count)
        // })
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    incrementFiveTimes() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <br/>
                <button onClick={() => this.incrementFiveTimes()}>Increment</button>
            </div>
        );
    }
}

export default Counter;