import React, {Component} from "react";
import About from "./About";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: 'Home Page',
        }

        this.greetHomePage = this.greetHomePage.bind(this)
    }

    greetHomePage(parameter) {
        alert(`Hello ${this.state.Message} ${parameter}`)
    }

    render() {
        return (
            <div>
                <div>
                    This is home page
                </div>
                <div>
                    <About greetHandler={this.greetHomePage}/>
                </div>
            </div>
        );
    }

}

export default HomePage;
