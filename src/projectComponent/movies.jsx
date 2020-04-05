import React, {Component} from 'react';
import {getMovies, deleteMovie} from "../services/fakeMovieService";
import Liked from "./liked";
import Pagination from "./pagination";
import {paginate} from "../utilis/paginate"
import {Link} from "react-router-dom";

// import MovieList from "./movieList";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies(),
            itemPerPage: 4,
            totalItem: 10,
            currentPage: 1,
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

    handleLiked = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].liked = !movies[index].liked
        this.setState({
            movies
        })
    }

    handlePagination = (page) => {
        this.setState({
            currentPage: page,
        })
    }

    render() {
        const {itemPerPage, currentPage, movies: allMovies} = this.state;
        const movies = paginate(allMovies, currentPage, itemPerPage)
        console.log(movies)
        return (
            <>
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
                                <th scope="col">Like</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                movies.map(movie =>
                                    <tr key={movie._id}>
                                        <td>
                                            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                                        </td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        {/*<td> <i className="fa fa-heart" aria-hidden="true    " role="button" style={{cursor: 'pointer'}}></i></td>*/}
                                        <td><Liked liked={movie.liked} onLiked={() => this.handleLiked(movie)}/></td>
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
                        <Pagination
                            itemPerPage={itemPerPage}
                            totalItem={this.state.movies.length}
                            currentPage={currentPage}
                            onPageChange={this.handlePagination}
                        />
                    </div>
                </div>


            </>
        );
    }
}

export default Movies;
