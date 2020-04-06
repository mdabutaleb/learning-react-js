import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">Admin |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/increment-app">Increment App  |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/posts">Posts |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact-us">Contact Us |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );

}

export default Navbar;
