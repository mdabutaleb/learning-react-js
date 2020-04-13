import axios from "axios";
import {toast} from "react-toastify";
import * as Sentry from '@sentry/browser';

// Sentry.init({ dsn: 'https://d10c1c97e8724cbaa1e587df3b43dc0c@o376953.ingest.sentry.io/5198355' });
axios.interceptors.response.use(null, error => {

    const expectedError = error.response && error.response.status >= 400 && error
    if (!expectedError) {
        // console.log("Logging the error", error);
        Sentry.captureException(new Error("Something broke"));
        toast.error('An unexpected error occurred!')
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
