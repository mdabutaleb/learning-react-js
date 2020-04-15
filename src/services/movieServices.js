import http from "./httpService";

const apiEndPoint = 'http://localhost:3001/api'

export function saveMovie(movie) {
    if(movie._id){
        const body = {...movie}
        delete body._id;
        return http.put(`${apiEndPoint}/movies/${movie._id}`, body);
    }
    return http.post(apiEndPoint + '/movies', movie)
}

export function getMovies() {
    return http.get(apiEndPoint + '/movies')
}

export function viewMovie(movieID) {
    return http.get(`${apiEndPoint}/movies/${movieID}`)
}

export function getGenre() {
    return http.get(apiEndPoint + '/genres')
}

export function deleteMovies(movieID) {
    return http.delete(apiEndPoint + '/movies/' + movieID)
}

