import React, {Component} from 'react';
import RegInput from "./regInput";
import Joi from "joi";
import CommonForm from "../common/commonForm";

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
        const {data, errors} = this.state;
        return (
            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={this.handleSubmit}>
                    <RegInput
                        name="name"
                        label="Name"
                        value={data.name}
                        onChange={this.handleChange}
                        error={errors.name}
                    />
                    <RegInput
                        name="email"
                        label="Email"
                        value={data.email}
                        type="email"
                        onChange={this.handleChange}
                        error={errors.email}
                    />
                    <RegInput
                        name="password"
                        label="Password"
                        value={data.password}
                        type="password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;
