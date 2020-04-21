import React, {Component} from 'react';
import Joy from "joi";
import CommonForm from "./register/commonForm";
import auth from "../services/authServices";
import RefDemo from "../Components/RefDemo";
import {Redirect} from "react-router-dom";

const URL = process.env.REACT_APP_PUBLIC_URL

class Login extends CommonForm {

    constructor(props) {
        super(props);
        this.state = {
            data: {email: '', password: ''},
            errors: {}
        }
    }

    schema = {
        email: Joy.string().required().label("Email"),
        password: Joy.string().required().label("Password"),
    }

    doSubmit = async () => {
        try {
            await auth.login(this.state.data.email, this.state.data.password);
            const {state} = this.props.location
            window.location = URL + (state) ? state.from.pathname : '/admin';
        } catch (e) {
            if (e.response) {
                const errors = {...this.state.errors}
                errors.password = e.response.data
                this.setState({errors})
            }

        }
    }

    render() {
        if (auth.getCurrentUser()) return <Redirect to={`${URL}/admin`}/>
        return (
            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderSubmitButton("Login")}
                </form>
            </div>
        );
    }
}

export default Login;
