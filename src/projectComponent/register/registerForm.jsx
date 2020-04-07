import React, {Component} from 'react';
import RegInput from "./regInput";
import Joi from "joi";

class RegisterForm extends Component {
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


    validateProperty({name, value}) {
        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema)
        return (error) ? error.details[0].message : null;
    }

    validateForm() {
        const {error} = Joi.validate(this.state.data, this.schema, {abortEarly: false});
        if (!error) return;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message
        }
        return errors;

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        this.setState({
                errors: errors || {}
            }
        )

        if (errors) return;
        this.doSubmit();
    }

    doSubmit() {
        console.log('Submitted!')
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        errors[input.name] = this.validateProperty(input)

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({
            data, errors
        })
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
