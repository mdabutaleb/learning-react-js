import React, {Component} from 'react';

const RegInput = ({name, label, type = "text", value, onChange, error }) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"/>
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            }

        </div>
    );

}

export default RegInput;
