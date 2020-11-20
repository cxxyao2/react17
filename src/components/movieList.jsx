import React, { Component } from 'react';
import Pagination from './common/pagination';
import { paginate } from "../utils/paginate";
import ListGroup from './common/listGroup';
import { getGenres, getMovies } from '../services/fakeService';
import MoviesTable from './common/moviesTable';
import _ from "lodash";


class MovieList extends Component {
  state = { 
    pageSize: 4,
    currentPage: 1,
    movies: [],
    genres: [],
    selectedGenre: {},
    sortPath: {column:"Genre", order:"asc"}
   };

   componentDidMount () {
     const genres = [{name: "All Genres"}, ...getGenres()];
     this.setState({ movies: getMovies(), genres: genres});
   }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m.title !== movie.title);
    this.setState({movies: movies});
  };
  handleSort = (column) => {
    const sortPath = {...this.state.sortPath};
    if (sortPath.column === column) {
      sortPath.order = sortPath.order === "asc" ? "desc" : "asc";
    } else {
      sortPath.column = column;
      sortPath.order = "asc";
    }
    this.setState({ sortPath: sortPath, currentPage: 1 });
  }

  handleUpdate = (movie) => {
    console.log('update', movie);
  }
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});

  };

  handlePageChange = page => {
    this.setState({currentPage : page});
  };


  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1});
    console.log(genre);
  }

  render() { 
    const {length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, sortPath, movies: allMovies} = this.state;


    if (count === 0) 
    return <p>There are no movies</p>;
    const filtered = selectedGenre && selectedGenre.id
      ? allMovies.filter(m => m.Genre === selectedGenre.name)
      : allMovies;

    const sorted = _.orderBy(filtered, [sortPath.column], [sortPath.order]);
    console.log('sortPath', sortPath);
    const movies = paginate(sorted, currentPage, pageSize);

    return  (
      <div className="row">
        <div className="col-3">
          <ListGroup 
            items={this.state.genres} 
            textProperty="name"
            valueProperty="id"
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
            />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable 
            movies={movies}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
            onUpdate={this.handleUpdate}  
            onLike={this.handleLike} 
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>

   
     
    );
  }
}
 
export default MovieList;