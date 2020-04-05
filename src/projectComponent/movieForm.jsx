import React, {Component} from 'react';

class MovieForm extends Component {

    submitHandle = () => {
        this.props.history.push('/movies')
    }

    render() {
        return (
            <div className="ml-5">
                <h1>Movie Form - {this.props.match.params.id}</h1>
                <button onClick={this.submitHandle} className="btn btn-primary">Save</button>
            </div>
        );
    }
}

export default MovieForm;
