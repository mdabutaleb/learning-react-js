import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;

function userURL(userId) {
    return `${apiEndPoint}/users/${userId}`;
}

export function register(user) {
    if (user._id) {
        const body = {...user}
        delete body._id;
        return http.put(userURL(user._id), body);
    } else {
        return http.post(apiEndPoint + '/users', user)
    }
}

export function getUsers() {
    return http.get(apiEndPoint + '/users')
}
