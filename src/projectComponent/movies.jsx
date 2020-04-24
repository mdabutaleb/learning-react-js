import React, {Component} from 'react';
import PaginationButton from "../utilis/paginationButton";
import {paginate} from "../utilis/paginate"
import {getMovies, getGenre, deleteMovies} from "../services/movieServices";
import {toast, ToastContainer} from "react-toastify";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            selectedGenre: "",
            itemPerPage: 4,
            totalItem: 10,
            currentPage: 1,
            sortColumn: {path: "title", order: "asc"}
        }
    }

    async componentDidMount() {
        const {data} = await getGenre()
        const genres = [{_id: "", name: "All genres"}, ...data]
        const {data: movies} = await getMovies()
        this.setState({movies, genres})
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
            console.log(e.response);
            toast.error('Something going wrong!');
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

    handleSelected = (genre) => {
        this.setState({selectedGenre: genre, currentPage: 1})
    }

    handleSort = sortColumn => {
        this.setState({sortColumn})
    }


    render() {
        const {itemPerPage, currentPage, movies: allMovies, genres, selectedGenre, sortColumn} = this.state;

        const filteredMovies = selectedGenre && selectedGenre._id
            ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
            : allMovies;

        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sortedMovies, currentPage, itemPerPage)
        return (
            <>
                <ToastContainer/>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <ListGroup
                                genres={genres}
                                handleSelected={this.handleSelected}
                                selectedItem={selectedGenre}
                            />
                        </div>
                        <div className="col">
                            {this.movieCount()}

                            <MoviesTable
                                movies={movies}
                                sortColumn={sortColumn}
                                onLiked={this.handleLiked}
                                onDelete={this.handleDelete}
                                onSort={this.handleSort}
                            />
                            <PaginationButton
                                itemPerPage={itemPerPage}
                                totalItem={filteredMovies.length}
                                currentPage={currentPage}
                                onPageChange={this.handlePagination}
                            />
                        </div>
                    </div>
                </div>


            </>
        );
    }
}

export default Movies;
