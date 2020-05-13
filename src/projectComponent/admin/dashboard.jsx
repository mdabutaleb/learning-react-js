import React, {Component} from 'react';
import Sidebar from "./sidebar";
import {Route, Switch} from "react-router-dom";
import Users from "./users/users";
import Posts from "./posts/posts";
import {ToastContainer} from "react-toastify";
import employee from "../../hooks/employee";
import CategoryPage from "../../context/categoryPage";
import UserContext from "../../context/userContext";

class Dashboard extends Component {
    state = {
        currentUser: {name: null}
    }

    handleName = username => {
        const currentUser = {name: 'Sumon'}
        // this.setState({currentUser})
        this.setState({
            currentUser
        })
    }

    render() {
        return (
            <>
                <ToastContainer/>
                <h1 className="m-2"> Admin Panel</h1>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        <Switch>>
                            <Route path="/admin/users" component={Users}/>
                            <Route path="/admin/employee" component={employee}/>
                            <UserContext.Provider value={
                                {
                                    currentUser: this.state.currentUser,
                                    onHandle: this.handleName
                                }}>
                                <Route path="/admin/categories" component={CategoryPage}/>

                            </UserContext.Provider>

                            <Route path="/admin/posts" component={Posts}/>
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;
