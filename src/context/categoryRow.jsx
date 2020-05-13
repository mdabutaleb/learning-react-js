import React, {useContext} from 'react';
import UserContext from "./userContext";
const CategoryRow = () => {
    const currentUser = useContext(UserContext)
    console.log(currentUser);
    return (
        <div>
            Row
        </div>
    );
}

export default CategoryRow;
