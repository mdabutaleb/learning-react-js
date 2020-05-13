import React, {Component} from 'react';
import CategoryList from "./categoryList";
import Login from "./login";

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <CategoryList/>
                <Login/>
            </div>
        );
    }
}

export default CategoryPage;
