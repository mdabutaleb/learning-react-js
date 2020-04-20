import http from "./httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;

function movieUrl(movieID) {
    return `${apiEndPoint}/movies/${movieID}`;
}

export function saveMovie(movie) {
    if (movie._id) {
        const body = {...movie}
        delete body._id;
        return http.put(movieUrl(movie._id), body);
    } else {
        return http.post(apiEndPoint + '/movies', movie)
    }


}

export function getMovies() {
    return http.get(apiEndPoint + '/movies')
}

export function viewMovie(movieID) {
    return http.get(movieUrl(movieID))
}

export function getGenre() {
    return http.get(apiEndPoint + '/genres')
}

export function deleteMovies(movieID) {
    return  http.delete(movieUrl(movieID));
}

