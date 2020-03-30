import React, {Component} from 'react';
import {getMovies, deleteMovie} from "../services/fakeMovieService";
import MovieList from "./movieList";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies(),
        }
    }

    handleDelete = (movieId) => {
        const movies = this.state.movies.filter(m => m._id !== movieId)
        this.setState({
            movies: movies,
        })
    }

    movieCount() {
        let length = this.state.movies.length;
        return length > 0 ? <p>Showing {length} movies in the database</p> : <p>There are no movies in the database</p>;
    }

    render() {
        // let row = this.state.movies.map(movie => <MovieList key={movie._id} movie={movie} handle={this.handleDelete}/>)
        // console.log(this.state.movies)
        return (
            <div className="container">
                <div className="starter-template">
                    {this.movieCount()}
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.movies.map(movie =>
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button onClick={() => this.handleDelete(movie._id)}
                                                className="btn btn-danger">Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Movies;
