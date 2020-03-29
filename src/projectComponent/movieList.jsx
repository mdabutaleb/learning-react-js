import React, {Component} from 'react';

function MovieList({movie, handle}) {
// console.log(movie)
    return (
        <>
            <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                    <button onClick={() => handle(movie._id)}
                            className="btn btn-danger">Delete
                    </button>
                </td>
            </tr>

        </>
    );
}

export default MovieList;
