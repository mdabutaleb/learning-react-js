import React, {Component} from 'react';
import Joi from "joi";
import CommonForm from "./commonForm";
import CommonInput from "./commonInput";

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
        name: Joi.string().min(5).max(20).required().label("Name"),
        email: Joi.string().email().min(4).max(30).required().label("Email"),
        password: Joi.string().min(8).max(30).required().label("Password"),
    }

    doSubmit() {
        console.log('Submitted!')
    }


    render() {
        return (
            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Name', 'text')}
                    {this.renderInput('email', 'email', 'email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderSubmitButton('Submit')}
                </form>
            </div>
        );
    }
}

export default RegisterForm;
