import React, { Component } from 'react';
import _ from "lodash";
import {Link} from "react-router-dom";

import Pagination from './common/pagination';
import { paginate } from "../utils/paginate";
import ListGroup from './common/listGroup';
import { getGenres, getMovies } from '../services/fakeService';
import MoviesTable from './common/moviesTable';
import SearchBox from './common/searchbox';


class MovieList extends Component {
  state = { 
    pageSize: 4,
    currentPage: 1,
    movies: [],
    genres: [],
    selectedGenre: {},
    sortPath: {column:"Genre", order:"asc"},
    searchQuery: ""
   };

   componentDidMount () {
     const genres = [{name: "All Genres"}, ...getGenres()];
     this.setState({ movies: getMovies(), genres: genres});
   }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m.title !== movie.title);
    this.setState({movies: movies});
  };
  

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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1});
  }

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  }

  handleSort = path => {
    this.setState({ sortPath : path})
  }

  getPagedData = () => {
    const { 
      pageSize, 
      currentPage, 
      searchQuery,
      selectedGenre, 
      sortPath, 
      movies: allMovies 
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m => 
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    else if (selectedGenre && selectedGenre.id)
      filtered = allMovies.filter(m => m.genre === selectedGenre.name);
    
    const sorted = _.orderBy(filtered, [sortPath.column], [sortPath.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };

  }

  render() { 
    const {length: count } = this.state.movies;
    const { pageSize, currentPage,  sortPath, searchQuery} = this.state;


    if (count === 0) 
    return <p>There are no movies</p>;

    const { totalCount, data: movies} = this.getPagedData();
    
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
          <Link 
            to="/movies/new" 
            className="btn btn-primary"
            style={{ marginBottom: 20 }}>
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable 
            movies={movies}
            sortColumn={sortPath}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
            onUpdate={this.handleUpdate}  
            onLike={this.handleLike} 
          />
          <Pagination
            itemsCount={totalCount}
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