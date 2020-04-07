import React, {Component} from 'react';
import Input from "./common/input";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: {
                username: '',
                password: ''

            },
            errors: {}
        }
    }

    handleValidate = () => {
        const errors = {}
        const {account} = this.state;

        if (account.username.trim() === '')
            errors.username = "Username field is required";

        if (account.password.trim() === '')
            errors.password = "Password field is required";
        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.handleValidate()
        this.setState({errors: errors || {}})
        if (errors) return;
        //save to database
    }

    validateProperty = (input) => {
        if (input.name === 'username') {
            if(input.value.trim()==='') return "Username field is required";
        }
        if (input.name === 'password') {
            if(input.value.trim()==='') return "Password field is required";
        }
    }

    handleChange = ({currentTarget: input}) => {
        // validating error
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name];

        const account = {...this.state.account}
        account[input.name] = input.value;
        // setting value and error to state
        this.setState({account, errors})
    }

    render() {
        const {account, errors} = this.state;
        return (
            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={this.handleSubmit}>
                    <Input label="Username" name="username"
                           value={account.username}
                           onChange={this.handleChange}
                           error={errors.username}
                    />

                    <Input label="Password" name="password"
                           value={account.password}
                           onChange={this.handleChange}
                           error={errors.password}
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
