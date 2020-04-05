import React, {Component} from 'react';
import Sidebar from "./sidebar";
import {Route, Switch} from "react-router-dom";
import Users from "./users";
import Posts from "../posts";

class Dashboard extends Component {
    render() {
        return (
            <>
                <h1 className="m-2"> Admin Panel</h1>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        <Switch>>
                            <Route path="/admin/users" component={Users}/>
                            <Route path="/admin/posts" component={Posts}/>
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;
