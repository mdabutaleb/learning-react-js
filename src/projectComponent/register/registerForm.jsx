import React, {Component} from 'react';
import RegInput from "./regInput";

class RegisterForm extends Component {
    state = {
        data: {
            email: '',
            name: '',
            password: ''
        },
        errors: {}
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


    validateProperty({name, value}) {
        if (name === 'name') {
            return (value.trim() === "") ? 'Name field is required' : null
        }
        if (name === 'email') {
            return (value.trim() === "") ? 'Email field is required' : null
        }
        if (name === 'password') {
            return (value.trim() === "") ? 'Password field is required' : null
        }
    }

    validateForm() {
        const errors = {};
        const data = {...this.state.data};
        if (data.name.trim() === '') errors.name = "Name field is required"
        if (data.email.trim() === '') errors.email = "Email field is required"
        if (data.password.trim() === '') errors.password = "Password field is required"
        return Object.keys(errors.length === 0) ? errors : null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        this.setState({
                errors: errors || {}
            }
        )

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
