import http from "./httpService";

const apiEndPoint = 'http://localhost:3001/api'

export function saveMovie(movie) {
    // console.log('movie is now in movie server', movie);
    return http.post(apiEndPoint + '/movies', movie)
}

export function getMovies() {
    return http.get(apiEndPoint + '/movies')
}

export function getGenre() {
    return http.get(apiEndPoint + '/genres')
}

export function deleteMovies(movieID) {
    return http.delete(apiEndPoint + '/' + movieID)
}

