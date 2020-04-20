import axios from "axios";
import {toast} from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, error => {

    const expectedError = error.response && error.response.status >= 400 && error
    if (!expectedError) {
        logger.log(error);
        toast.error('Something going wrong!')
    }
    return Promise.reject(error);
});


function setJwt(jwt) {
    axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
}
