import React, {useContext} from 'react';
import UserContext from "./userContext";

const CategoryRow = () => {
    const userContext = useContext(UserContext)
    // console.log(currentUser);
    return (
        <div>
            Row |
            {userContext ? userContext.currentUser.name : ""}
            <br/>
        </div>
    );
}

export default CategoryRow;
