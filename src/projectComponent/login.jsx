import React, {Component} from 'react';
import Input from "./common/input";
import Joy from "joi";

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

    schema = {
        username: Joy.string().required().label("Username"),
        password: Joy.string().required().label("Password"),
    }

    validate = () => {
        const option = {abortEarly: false};
        const {error} = Joy.validate(this.state.account, this.schema, option);
        if (!error) return null;

        const errors = {}
        for (let item of error.details) {
            errors[item.path[0]] = item.message
        }
        return errors;

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({errors: errors || {}})
        if (errors) return;
        //save to database
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}
        const {error} = Joy.validate(obj, schema);
        return (error) ? error.details[0].message : null
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
