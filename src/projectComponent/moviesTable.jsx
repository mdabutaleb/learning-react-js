import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Liked from "./liked";
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
            key: 'edit',
            content: movie => (
                <NavLink className="" to={`${URL}/movies/create/${movie._id}`}>
                    <button className="btn btn-primary">Edit</button>
                 </NavLink>
            )
        },
        {
            key: 'delete',
            content: movie => <button onClick={() => this.props.onDelete(movie._id)}
                                      className="btn btn-danger">Delete</button>
        },
    ]


    render() {
        const {movies, onSort, sortColumn} = this.props;

        return (
                <Table sortColumn={sortColumn} onSort={onSort} data={movies} columns={this.columns}/>
        );
    }
}


export default MoviesTable;
