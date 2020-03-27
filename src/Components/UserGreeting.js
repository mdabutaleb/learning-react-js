import React, {Component} from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // only will render the element if the condition is true
        return this.state.isLoggedIn && <div>Welcome Sumon!</div>

        // return (this.state.isLoggedIn) ? <div>Welcome Sumon!</div> : <div>Login please</div>

        // if else and variable to render element
        // let element ;
        // if (this.state.isLoggedIn){
        //     element = <div>Welcome Sumon!</div>
        // }else{
        //     element = <div>Login Please</div>
        // }
        // return(
        //     element
        // )

        // direct if else to render element
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Sumon</div>
        //         </div>
        //     );
        // }else{
        //     return (
        //         <div>
        //             <div>Login please </div>
        //         </div>
        //     );
        // }

    }

}

export default UserGreeting;
