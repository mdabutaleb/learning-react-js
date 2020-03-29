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

    handleDelete = movie => {
        deleteMovie(movie);
        this.setState({
            movies: getMovies(),
        })
    }



    render() {
        let row = this.state.movies.map(movie => <MovieList key={movie._id} movie={movie} handle={this.handleDelete}/>)
        // console.log(this.state.movies)
        return (
            <div className="container">
                <div className="starter-template">
                    <p>Showing {this.state.movies.length} movies in the database</p>
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
                         row

                        }


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Movies;
