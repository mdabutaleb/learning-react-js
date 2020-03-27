import React, {Component} from "react";

class ClassClick extends Component {

    clickHandler() {
       alert('Button clicked')
    }

    render() {
        return (
            <div>
                Button click from class component
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        );
    }


}

export default ClassClick
