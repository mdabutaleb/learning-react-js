import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndPoint = process.env.REACT_APP_API_URL;

const tokenKey = 'token';

http.setJwt(getJwt());

async function login(email, password) {
    const {data: jwt} = await http.post(apiEndPoint + '/auth', {email, password})
    localStorage.setItem(tokenKey, jwt)
}

function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

async function logout() {
    localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (e) {
        return null;
    }

}

function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
}
