import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;

export function register(user) {
    return http.post(apiEndPoint + '/users', user)
}
