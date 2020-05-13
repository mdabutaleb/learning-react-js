import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className="list-group">
                <Link to="/admin/users" className="list-group-item list-group-item-action">Users</Link>
                <Link to="/admin/employee" className="list-group-item list-group-item-action">Employee</Link>
                <Link to="/admin/posts" className="list-group-item list-group-item-action">Posts</Link>
            </div>
        </div>
    );
}

export default Sidebar;
