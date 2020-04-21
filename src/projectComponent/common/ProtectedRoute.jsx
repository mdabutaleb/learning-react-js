import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import auth from "../../services/authServices";

const ProtectedRoute = ({path, component: Component, render, ...rest}) => {

    return (
        <Route{...rest} render={(props) => {
            if (!auth.getCurrentUser())
                return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>;
            return Component ? <Component {...props}/> : render(props);
        }}
        />
    );
}

export default ProtectedRoute;
