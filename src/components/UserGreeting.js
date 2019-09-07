import React, {Component} from 'react'
import Message from "./Message";

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //execute when only true
        return this.state.isLoggedIn && <div>Hello Sumon Mahmud</div>



        // return this.state.isLoggedIn ? (<div>Hello Sumon Mahmud</div>) : (<div>Hello Guest</div>)

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = 'Hello Sumon Mahmud'
        // } else {
        //     message = 'Hello Guest'
        // }
        //
        // return <div>{message}</div>


    }
}

export default UserGreeting;