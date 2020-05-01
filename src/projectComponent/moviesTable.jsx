import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Liked from "./liked";
import auth from "../services/authServices";
import Table from "./common/table";


const URL = process.env.REACT_APP_PUBLIC_URL

class MoviesTable extends Component {

    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'In Stock'},
        {path: 'dailyRentalRate', label: 'Daily Rental Rate'},
        {
            key: 'like',
            content: movie => <Liked liked={movie.liked} onLiked={() => this.props.onLiked(movie)}/>
        },
        {
            key: 'delete',
            content: movie => <button onClick={() => this.props.onDelete(movie._id)}
                                      className="btn btn-danger">Delete</button>
        },
    ]


    render() {
        const {movies, onSort, sortColumn} = this.props;
        const user = auth.getCurrentUser();

        return (
            <>
                {(user.isAdmin) && (
                    <NavLink className="nav-link" to={`${URL}/movies/create`}>
                        <button className="btn btn-primary btn-sm">Add New</button>
                    </NavLink>)
                }
                <Table sortColumn={sortColumn} onSort={onSort} data={movies} columns={this.columns}/>

            </>
        );
    }
}


export default MoviesTable;
