import React, {Component} from 'react';
import Joi from "joi";
import CommonInput from "./commonInput";

class CommonForm extends Component {
    state = {
        data: {
            email: '',
            name: '',
            password: ''
        },
        errors: {}
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

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        errors[input.name] = this.validateProperty(input)

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({
            data, errors
        })
    }

    renderSubmitButton(label) {
        return (
            <button type="submit" className="btn btn-primary">{label}</button>
        )
    }

    renderInput(name, label, type = "text") {
        const {data, errors} = this.state;
        return (
            <CommonInput
                name={name}
                label={label}
                value={data[name]}
                type={type}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )

    }


}

export default CommonForm;
