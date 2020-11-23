
import React from 'react';
import Joi from 'joi-browser';

import Form from '../components/common/form';
import { getGenres} from '../services/fakeService';
import { getMovie, saveMovie } from '../services/movieService';

class NewMovieForm extends Form {
  state = {
    data: { 
      title: "", 
      genre: "", 
      numberInStock: 0, 
      rate: 0 
    },
    genres: {},
    errors: {}
  };

  schema = {
    title: Joi.string()
      .min(3)
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("NumberInStock"),
    rate: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState( { genres });

    const movieId = this.props.match.params.id;
    if(movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/non-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genre: movie.genre._id,
      numberInStock: movie.numberInStock,
      rate: movie.dailyRentalRate
    }
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movieList");
  }


  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genre', this.state.genres)}
          {this.renderInput('numberInStock', 'Number in stock','number')}
          {this.renderInput('rate', 'Rate')}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;