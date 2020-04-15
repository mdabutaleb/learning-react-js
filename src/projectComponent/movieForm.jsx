import React, {Component} from 'react';
import Form from "./common/form";
import * as movie from "../services/movieServices"
import Input from "./common/input";
import Joi from "joi";
import {toast} from "react-toastify";

class MovieForm extends Form {
    state = {
        genres: [],
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",

        },
        errors: {},

    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().min(2).max(20).required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().label("Number In Stock"),
        dailyRentalRate: Joi.number().required().label("Daily Rental Rate"),

    }

    async populateGenre() {
        const {data} = await movie.getGenre()
        this.setState({
            genres: data,
        })
    }

    async populateMovie() {
        if (this.props.match.params.id) {
            const {data} = await movie.viewMovie(this.props.match.params.id)
            this.setState({data: this.mapToViewModel(data)})

        } else {
            return;
        }
    }

    async componentDidMount() {
        this.populateGenre();
        this.populateMovie();
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    async doSubmit() {
        try {
            const response = await movie.saveMovie(this.state.data);
            if (response.status === 200) {
                toast.success('Movie Saved Successfully!')
                this.props.history.push('/movies')
            }
        } catch (e) {
            if (e.response && e.response.status === 400) {
                toast.error('Invalid Request');
            }
        }
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="starter-template">
                        <h3>Movie Form </h3>
                        <div className="col-md-6 offset-2">
                            <form onSubmit={this.handleSubmit}>
                                <Input
                                    label="Title"
                                    name="title"
                                    error={this.state.errors.title}
                                    onChange={this.handleChange}
                                    value={this.state.data.title}
                                />
                                <label htmlFor="genre">Genre</label>
                                <select onChange={this.handleChange} value={this.state.data.genreId}
                                        className="form-control" name="genreId" id="genre">
                                    <option value="">Select Genre</option>
                                    {
                                        this.state.genres.map(genre => (
                                                <option value={genre._id} key={genre._id}>{genre.name}</option>
                                            )
                                        )
                                    }

                                </select>
                                {
                                    this.state.errors.genreId && <div className="alert alert-danger" role="alert">
                                        {this.state.errors.genreId}
                                    </div>
                                }
                                <Input
                                    label="Stock"
                                    name="numberInStock"
                                    error={this.state.errors.numberInStock}
                                    onChange={this.handleChange}
                                    value={this.state.data.numberInStock}
                                />
                                <Input
                                    label="Daily Rental Rate"
                                    name="dailyRentalRate"
                                    error={this.state.errors.dailyRentalRate}
                                    onChange={this.handleChange}
                                    value={this.state.data.dailyRentalRate}
                                />
                                <button onClick={this.submitHandle} className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MovieForm;
