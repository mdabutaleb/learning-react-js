import React, {Component} from 'react';
import Joi from "joi";
import CommonInput from "./commonInput";
import Select from "../common/select";

class CommonForm extends Component {
    state = {
        data: {},
        errors: {}
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

    validateProperty({name, value}) {
        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema)
        return (error) ? error.details[0].message : null;
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

    renderSelect(name, label, options) {
        const {data, errors} = this.state;
        return (
            <Select
                label={label}
                name={name}
                error={errors[name]}
                value={data[name]}
                onChange={this.handleChange}
                options={options}
            />
        )
    }


}

export default CommonForm;
