import React, {Component} from 'react';
import UserContext from "./userContext";

class CategoryList extends Component {
    static  contextType = UserContext;

    componentDidMount() {
        console.log('User context is : ', this.context)
    }

    render() {
        return (
            <UserContext.Consumer>
                {UserContext => <div> Category List | {UserContext.name} </div>}
            </UserContext.Consumer>
        );
    }
}

// CategoryList.contextType = UserContext;

export default CategoryList;
