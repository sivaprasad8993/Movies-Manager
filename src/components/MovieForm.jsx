import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import { getMovie } from '../services/fakeMovieService';
import { saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MovieForm extends Form {
    state = {
        data: {
            title: '', genre: '', numberInStock: '', dailyRentalRate: ''
        },
        errors: {}
    }

    componentDidMount() {
        const movie = getMovie(this.props.match.params.id);
        const data = { ...movie };
        console.log(Object.keys(data));
        if (Object.keys(data).length > 0) {
            delete data._id;
            this.setState({ data: { ...data, genre: data['genre'].name } });
            console.log(data);
        }
    }

    schema = {
        title: Joi.string().required(),
        genre: Joi.string().required(),
        numberInStock: Joi.number().integer().min(0).max(100),
        dailyRentalRate: Joi.number().min(0).max(10),
    }

    doSubmit = () => {
        console.log('Submitted');
        const genre = getGenres().find((g) => g.name === this.state.data.genre);
        saveMovie({ _id: this.props.match.params.id, ...this.state.data, genre });
        this.props.history.push('/');
    }

    render() {
        console.log('Movie Form');
        return (
            <div className='container' style={{ width: '50%' }}>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    <div className='form-group'>
                        <label htmlFor='ganre'>Genre</label>
                        <select className='form-control' id='genre' name='genre' value={this.state.data.genre} onChange={this.handleChange}>
                            <option></option>
                            <option>Action</option>
                            <option>Comedy</option>
                            <option>Thriller</option>
                        </select>
                    </div>
                    {this.renderInput('numberInStock', 'Number In Stock', 'number')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton('Submit')}
                </form>
            </div>
        );
    }
}

export default MovieForm;