import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;


export function login(email, password) {
    return http.post(apiEndPoint + '/auth', {email, password})
}
