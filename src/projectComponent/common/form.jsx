import React, {Component} from 'react';
import Joy from "joi";

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
        const {error} = Joy.validate(this.state.data, this.schema, option);
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
        const {error} = Joy.validate(obj, schema);
        return (error) ? error.details[0].message : null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({errors: errors || {}})
        if (errors) return;
        this.doSubmit();
    }

    handleChange = ({currentTarget: input}) => {
        // validating error
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name];

        const data = {...this.state.data}
        data[input.name] = input.value;
        // setting value and error to state
        this.setState({data, errors})
    }

}

export default Form;
