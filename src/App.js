import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import IncrementApp from "./IncrementApp";
import Movies from "./projectComponent/movies";
import Navbar from "./projectComponent/navbar";
import Home from "./projectComponent/home";
import Products from "./projectComponent/products";
import ProductDetails from "./projectComponent/productDetails";
import PostDetails from "./projectComponent/postDetails";
import NotFound from "./projectComponent/404";
import Dashboard from "./projectComponent/admin/dashboard";
import MovieForm from "./projectComponent/movieForm";
import Login from "./projectComponent/login";
import RegisterForm from "./projectComponent/register/registerForm";
import auth from "../src/services/authServices";
import Logout from "./projectComponent/logout";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import ProtectedRoute from "./projectComponent/common/ProtectedRoute";


const URL = process.env.REACT_APP_PUBLIC_URL

class App extends Component {
    state = {}

    componentDidMount() {
        try {
            const user = auth.getCurrentUser();
            this.setState({user})
        } catch (e) {
        }

    }

    render() {
        const user = auth.getCurrentUser();
        return (
            <div>
                <Navbar user={user}/>
                <Switch>
                    <Route path={`${URL}/login`} component={Login}/>
                    <Route path={`${URL}/logout`} component={Logout}/>
                    <Route path={`${URL}/register`} component={RegisterForm}/>
                    <ProtectedRoute path={`${URL}/admin`} component={Dashboard}/>
                    <Route path={`${URL}/products/:id`} component={ProductDetails}/>
                    <Route path={`${URL}/products`} render={(props) => <Products {...props}/>}/>
                    <Route path={`${URL}/posts/:year/:month?`} render={(props) => <PostDetails {...props}/>}/>


                    <ProtectedRoute  path={`${URL}/movies/create/:id?`} component={MovieForm}/>

                    <ProtectedRoute path={`${URL}/movies`} render={(props) => <Movies {...props} user={user}/>}/>
                    <ProtectedRoute path={`${URL}/increment-app`} component={IncrementApp}/>
                    <Redirect from={`${URL}/test`} to="movies"/>
                    <Route path={`${URL}/404`} component={NotFound}/>
                    <ProtectedRoute path={`${URL}/`} exact component={Home}/>
                    <ProtectedRoute path={`${URL}/hr`} exact component={Home}/>
                    <Redirect to={`${URL}/404`}/>
                </Switch>
            </div>


        );
    }

}

export default App;
