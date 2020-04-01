import React, {Component} from 'react';

const Navbar = (props) => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar <span
                    className="badge badge-primary">{props.totalCount}</span> </a>
            </nav>
        </React.Fragment>
    );

}

export default Navbar;
