import React, {Component} from 'react';
import PaginationButton from "./common/paginationButton";
import {paginate} from "../utilis/paginate"
import {getMovies, getGenre, deleteMovies} from "../services/movieServices";
import {toast, ToastContainer} from "react-toastify";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from 'lodash';
import {NavLink} from "react-router-dom";
import auth from "../services/authServices";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            selectedGenre: null,
            searchQuery: "",
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

    handleGenreSelect = (genre) => {
        this.setState({selectedGenre: genre, searchQuery: "", currentPage: 1})
    }

    handleSort = sortColumn => {
        this.setState({sortColumn})
    }

    getPageData = () => {
        const {itemPerPage, currentPage, movies: allMovies, selectedGenre, sortColumn, searchQuery} = this.state;
        console.log(searchQuery);
        let filteredMovies = allMovies;
        if (searchQuery)
            filteredMovies = allMovies.filter(movie =>
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filteredMovies = allMovies.filter(movie => movie.genre._id === selectedGenre._id)


        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sortedMovies, currentPage, itemPerPage)
        return {data: movies, totalCount: filteredMovies.length}
    }

    handleSearch = query => {
        this.setState({searchQuery: query, selectedGenre: null, currentPage: 1})
    }

    render() {
        const {itemPerPage, currentPage, genres, selectedGenre, sortColumn, searchQuery} = this.state;
        const {data: movies, totalCount} = this.getPageData();
        const user = auth.getCurrentUser();
        return (
            <>
                <ToastContainer/>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <ListGroup
                                genres={genres}
                                handleSelected={this.handleGenreSelect}
                                selectedItem={selectedGenre}
                            />
                        </div>
                        <div className="col">
                            Showing {totalCount} movies in the database
                            {(user.isAdmin) && (
                                <NavLink className="nav-link px-0" to={`${URL}/movies/create`}>
                                    <button className="btn btn-primary btn-sm">Add New</button>
                                </NavLink>)
                            }
                            <input onChange={e => this.handleSearch(e.target.value)} value={searchQuery}
                                   className="form-control my-3 px-3" type="text"
                                   placeholder="Search..."/>
                            <MoviesTable
                                movies={movies}
                                sortColumn={sortColumn}
                                onLiked={this.handleLiked}
                                onDelete={this.handleDelete}
                                onSort={this.handleSort}
                            />
                            <PaginationButton
                                itemPerPage={itemPerPage}
                                totalItem={totalCount}
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
