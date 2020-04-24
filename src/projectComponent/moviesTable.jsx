import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import Liked from "./liked";
import auth from "../services/authServices";

const URL = process.env.REACT_APP_PUBLIC_URL

class MoviesTable extends Component {

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn}
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    render() {
        const {movies, onLiked, onDelete} = this.props;
        const user = auth.getCurrentUser();

        return (
            <>
                {(user.isAdmin) && (
                    <NavLink className="nav-link" to={`${URL}/movies/create`}>
                        <button className="btn btn-primary btn-sm">Add New</button>
                    </NavLink>)
                }

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col" onClick={() => this.raiseSort('title')}>Title</th>
                        <th scope="col" onClick={() => this.raiseSort('genre.name')}>Genre</th>
                        <th scope="col" onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                        <th scope="col" onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
                        <th scope="col"></th>
                        {(user.isAdmin) &&
                        <th scope="col"></th>
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movies.map(movie =>
                            <tr key={movie._id}>
                                <td>
                                    <Link to={`${URL}/movies/create/${movie._id}`}>{movie.title}</Link>
                                </td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                {/*<td> <i className="fa fa-heart" aria-hidden="true    " role="button" style={{cursor: 'pointer'}}></i></td>*/}
                                <td><Liked liked={movie.liked} onLiked={() => onLiked(movie)}/>
                                </td>
                                <td>
                                    {(user.isAdmin) &&
                                    (
                                        <button onClick={() => onDelete(movie._id)}
                                                className="btn btn-danger">Delete
                                        </button>
                                    )
                                    }
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </>
        );
    }
}


export default MoviesTable;
