import React from 'react';

const CommonInput = ({name, label, error, ...rest}) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                id={name}
                name={name}
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

export default CommonInput;
