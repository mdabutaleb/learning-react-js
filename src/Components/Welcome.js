import React, {Component} from "react";

class Welcome extends Component {
    render() {
        const {name, branch} = this.props
        return (
            <div>
                <p>This output from welcome class component {name}, {branch}</p>
            </div>
        );
    }
}
export default Welcome;
