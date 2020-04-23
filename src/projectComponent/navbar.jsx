import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

const URL = process.env.REACT_APP_PUBLIC_URL
const Navbar = ({user}) => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-md-8" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${URL}/admin`}>Admin |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${URL}/movies`}>Movies |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${URL}/products`}>Products |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${URL}/increment-app`}>Increment App |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${URL}/posts`}>Posts |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${URL}/contact-us`}>Contact Us |</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="collapse navbar-collapse col" id="navbarNav">
                    <ul className="navbar-nav">
                        {user && (
                            <>
                                <li className="nav-item">
                                   <p className="nav-link">Welcome, {user.name}</p>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={`${URL}/logout`}>Logout</NavLink>
                                </li>
                            </>
                        )}
                        {!user && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={`${URL}/login`}>Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={`${URL}/register`}>Register</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );

}

export default Navbar;
