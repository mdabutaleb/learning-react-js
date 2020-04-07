import React, {Component} from 'react';

const Input = ({label, name, value, onChange, error}) => {
    console.log()
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input className="form-control"
                   placeholder={label}
                   id={name}
                   name={name}
                   value={value}
                   onChange={onChange}
            />
            {
                error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            }

        </div>
    );
}

export default Input;
