import React, {useEffect, useState} from 'react';
import http from "../services/httpService";

const apiEndPoint = process.env.REACT_APP_API_URL;
export default function Employee() {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    useEffect(() => {


        async function prepareData() {
            const movies = await http.get(apiEndPoint + '/movies');
            setMovies(movies.data)

            const genres = await http.get(apiEndPoint + '/movies');
            setGenres(genres.data)
        }


        prepareData();



    },[])

    return (
        <div>
            {/*{users.map(user => <li key={user.id}>{user.name}</li>)}*/}
            {movies.map(movie => <li key={movie._id}>{movie.title}</li>)}
            <h2>Genre is: </h2>
            {genres.map(genre => <li key={genre._id}>{genre.title}</li>)}


        </div>
    );

}
