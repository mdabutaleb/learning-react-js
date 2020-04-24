import  {Component} from 'react';
import auth from "../services/authServices";

const URL = process.env.REACT_APP_PUBLIC_URL;

class Logout extends Component {
    componentDidMount() {
        auth.logout();
        window.location = URL + '/';
    }

    render() {
        return null;
    }

}

export default Logout;
