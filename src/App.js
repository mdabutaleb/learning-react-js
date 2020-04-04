import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import IncrementApp from "./IncrementApp";
import Movies from "./projectComponent/movies";
import 'font-awesome/css/font-awesome.css'
import {Route, Switch} from "react-router-dom";

import Navbar from "./projectComponent/navbar";
import Home from "./projectComponent/home";
import Products from "./projectComponent/products";
import ProductDetails from "./projectComponent/productDetails";
import Posts from "./projectComponent/posts";
import PostDetails from "./projectComponent/postDetails";

class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/products/:id" component={ProductDetails}/>
                    <Route path="/products" render={(props) => <Products {...props}/>}/>
                    <Route path="/posts/:year/:month?" render={(props) => <PostDetails {...props}/>}/>
                    <Route path="/posts" render={(props) => <Posts {...props}/>}/>
                    <Route path="/movies" render={(props) => <Movies {...props}/>}/>
                    <Route path="/increment-app" component={IncrementApp}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>


        );
    }

}

export default App;
