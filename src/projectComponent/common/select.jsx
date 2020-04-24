import React from 'react';

const Select = ({label, name, error, options, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="form-control">
                <option value="">Select</option>
                {
                    options.map(option => (
                            <option value={option._id} key={option._id}>
                                {option.name}
                            </option>
                        )
                    )
                }
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Select;
