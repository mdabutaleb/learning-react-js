import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ParentName: 'parent content!'
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childParent){
       alert(`Hello ${this.state.ParentName}`);
    }

    render() {
        return (
            <div style={{'border': '1px solid green'}}>
                <p>This content in parent component. </p><br/>
                {this.state.ParentName}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        );
    }

}

export default ParentComponent;
