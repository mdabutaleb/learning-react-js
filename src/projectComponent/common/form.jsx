import React, {Component} from 'react';
import Joi from "joi";
import Input from "./input";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: '',
                password: ''

            },
            errors: {}
        }
    }

    validate = () => {
        const option = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, option);
        if (!error) return null;

        const errors = {}
        for (let item of error.details) {
            errors[item.path[0]] = item.message
        }
        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema);
        return (error) ? error.details[0].message : null
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input); //input field validation
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name];

        const data = {...this.state.data}
        data[input.name] = input.value;
        // setting value and error to state
        this.setState({data, errors})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({errors: errors || {}})
        if (errors) return;
        this.doSubmit();
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} type="submit" className="btn btn-primary">
                {label}
            </button>
        )

    }

    renderInput(name, label, type = "text") {
        const {data, errors} = this.state;
        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )

    }

}

export default Form;
