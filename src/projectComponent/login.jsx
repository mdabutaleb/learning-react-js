import React, {Component} from 'react';
import Input from "./common/input";
import Joy from "joi";
import Form from "./common/form";

class Login extends Form {

    constructor(props) {
        super(props);
        this.state = {
            data: {username: '', password: ''},
            errors: {}
        }
    }
    schema = {
        username: Joy.string().required().label("Username"),
        password: Joy.string().required().label("Password"),
    }

    doSubmit = () => {
        console.log('Submitted!')
    }

    render() {
        const {data, errors} = this.state;
        return (
            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={this.handleSubmit}>
                    <Input label="Username" name="username"
                           value={data.username}
                           onChange={this.handleChange}
                           error={errors.username}
                    />

                    <Input label="Password" name="password"
                           value={data.password}
                           onChange={this.handleChange}
                           error={errors.password}
                    />
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default Login;
