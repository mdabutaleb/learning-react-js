import React, {Component} from 'react';
import UserContext from "./userContext";
import CategoryRow from "./categoryRow";

class CategoryList extends Component {
    static  contextType = UserContext;

    componentDidMount() {
        console.log('Row:  context is : ', this.context)
    }

    render() {
        return (
            <UserContext.Consumer>
                {UserContext => (
                    <div> Category List | {UserContext.currentUser ? UserContext.currentUser.name : ''}
                        <CategoryRow/>

                    </div>
                )}

            </UserContext.Consumer>
        );
    }
}

// CategoryList.contextType = UserContext;

export default CategoryList;
