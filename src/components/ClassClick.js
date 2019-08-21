import React, {Component} from 'react'

class ClassClick extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Hello'
        }

    }

    clickHandler() {
        this.setState({
            message: 'Good Bye !'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/*<button onClick={this.clickHandler.bind(this)}>CLick me</button>*/}
                <button onClick={() => this.clickHandler()}>Click Me</button>
            </div>
        );
    }
}

export default ClassClick