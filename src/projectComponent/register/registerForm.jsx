import React, {Component} from 'react';
import Joi from "joi";
import CommonForm from "./commonForm";
import * as userServices from "../../services/userServices";
import {toast, ToastContainer} from "react-toastify";

const URL = process.env.REACT_APP_PUBLIC_URL

class RegisterForm extends CommonForm {
    state = {
        data: {
            email: '',
            name: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        name: Joi.string().min(3).max(20).required().label("Name"),
        email: Joi.string().email().min(4).max(30).required().label("Email"),
        password: Joi.string().min(8).max(30).required().label("Password"),
    }

    doSubmit = async () => {
        try {
            const response = await userServices.register(this.state.data);
            if (response && response.status == 200) {
                toast.success('User Saved Successfully!')
                this.props.history.push(`${URL}/`)
            }

        } catch (e) {
            if (e.response && e.response.status === 400) {
                const errors = {...this.state.errors};
                errors.email = e.response.data;
                this.setState({errors})
                // toast.error(e.response.data);
            }
        }

    }


    render() {
        return (
            <>
                <ToastContainer/>
                <div className="col-md-4 offset-4 mt-5">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('name', 'Name', 'text')}
                        {this.renderInput('email', 'email', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderSubmitButton('Submit')}
                    </form>
                </div>
            </>
        );
    }
}

export default RegisterForm;
