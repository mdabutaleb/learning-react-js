import React from 'react';
import Form from "./common/form";
import * as movie from "../services/movieServices"
import Joi from "joi";
import {toast} from "react-toastify";

const URL = process.env.REACT_APP_PUBLIC_URL
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
        title: Joi.string().min(2).max(30).required().label("Title"),
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
                this.props.history.push(`${URL}/movies`)
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
                                {this.renderInput('title', "Title", "text")}
                                {this.renderSelect('genreId', 'Select Genre', this.state.genres)}
                                {/*<Select label="Select Genre" name="genreId" error={this.state.errors.genreId} value={this.state.data.genreId} onChange={this.handleChange} options={this.state.genres}/>*/}
                                {this.renderInput('numberInStock', 'Number in stock', 'text')}
                                {this.renderInput('dailyRentalRate', 'Daily Rental Rate', 'text')}
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
