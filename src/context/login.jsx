import React, {useContext} from 'react';
import UserContext from "./userContext";
const Login = () => {
const userContext = useContext(UserContext)
    return (
        <div>
            <button onClick={() => userContext.onHandle("Yahoo")}>Login</button>
        </div>
    );

}

export default Login;
