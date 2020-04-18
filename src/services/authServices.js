import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndPoint = process.env.REACT_APP_API_URL;

const appKey = 'token';

async function login(email, password) {
    const {data: jwt} = await http.post(apiEndPoint + '/auth', {email, password})
    localStorage.setItem(appKey, jwt)
}

function loginWithJwt(jwt) {
    localStorage.setItem(appKey, jwt);
}

async function logout() {
    localStorage.removeItem(appKey);
}

function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(appKey);
        return jwtDecode(jwt);
    } catch (e) {
        return null;
    }

}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser
}
