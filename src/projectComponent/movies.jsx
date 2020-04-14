import React, {Component} from 'react';
import Liked from "./liked";
import {Link, NavLink} from "react-router-dom";
import PaginationButton from "../utilis/paginationButton";
import {paginate} from "../utilis/paginate"
import {getMovies, deleteMovies} from "../services/movieServices";
import {toast, ToastContainer} from "react-toastify";


// import MovieList from "./movieList";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            itemPerPage: 4,
            totalItem: 10,
            currentPage: 1,
        }
    }

    async componentDidMount() {
        const {data} = await getMovies()
        this.setState({movies: data})
        console.log(data);
    }

    handleDelete = async (movieId) => {
        const originalMovies = this.state.movies;
        const movies = this.state.movies.filter(m => m._id !== movieId)
        this.setState({
            movies: movies,
        })

        try {
            const response = await deleteMovies(movieId)
            if (response.status === 200) {
                toast.success('Successfully Deleted!');
            }
        } catch (e) {
            this.setState({movies: originalMovies})
        }
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
        // console.log(movies)
        return (
            <>
                <ToastContainer/>
                <div className="container">
                    <div className="starter-template">
                        {this.movieCount()}
                        <NavLink className="nav-link" to="/movies/create">
                            <button className="btn btn-primary btn-sm">Add New</button>
                        </NavLink>
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
                                            <Link to={`/movies/create/${movie._id}`}>{movie.title}</Link>
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
                        <PaginationButton
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
