import React, { useState, useEffect} from 'react';
import http from '../services/httpService';
import config from '../config.json';
import { getMovies, deleteMovie as deleteService } from '../services/movieService';


export default function Movies(props) {
  const [movies, setMovies ] = useState([]);
  const { user } = props;
  // const [err, setError] = useState("");
  const endpoint = config.apiEndpoint;


  useEffect( () => {
    async function fetchData() {
      const promise = getMovies();
      const {data} = await promise;
      setMovies(data);
    }
    try {
      fetchData();
    } catch (ex) {
      // setError(ex.message);
      console.log('error network');
      console.log(ex);
    }
  });

  const addMovie = async () => {
    const movie = {
      title: "my brothers",
      genreId: "5f9f3377aa82f8ad2fddebaa",
      numberInStock: 24,
      dailyRentalRate: 25
    };
    const promise = http.post(endpoint,movie);
    await promise;
  };

  // put: update all the fields required:
  // patch: a part of fields
  const updateMovie = async () => {
    const movie = {
      title: "my grand brother2",
      genreId: "5f9f3377aa82f8ad2fddebaa",
      numberInStock: 66,
      dailyRentalRate: 88
    };
    const movieid = '5fb4572aa153c51c1ad5a9da';
    const updateEndPoint =  `${endpoint}/${movieid}`;
    const promise = http.put(updateEndPoint, movie);
    const { data } = await promise;
    console.log(data);
  };

  const getOneMovie = async () => {
    const movieid = '5fb543e32bf9790590c6f471';
    try {
      const { data: movie } = await http.get(endpoint + '/' + movieid);
      console.log(movie);

    } catch (error) {
      if(error.response && error.response.status === 404)
      return props.history.replace("/non-found");
    }
  }

  const deleteMovie = async () => {
    // 5fbdcdf6afcc680a5cbc323a
    const movieid = '5fb57dba2bf97905902b1f92';
    // const deleteEndpoint = `${endpoint}/${movieid}`;
    // const promise = http.delete(deleteEndpoint);
     const promise = deleteService(movieid);
    try {
      const { data } = await promise;
      console.log(data);
      const restMovies = movies.filter(movie => movie._id !== movieid);
      setMovies(restMovies);
      
    } catch (ex) {
      if(ex.response && ex.response.status === 404) {
        alert('This post has already been delete');
      
      }
    
    }
  };

  return (
    <div>
      <button onClick={getOneMovie} >Get a Movie </button>
      <button onClick={addMovie} >Add a new Movie</button>
      <button onClick={updateMovie} >update Movie</button>
      {user &&
        <button onClick={deleteMovie} >delete Movie</button>}
      <label>Movies</label>
      <ul>
      {movies.length >0 && movies.map(
        (movie,index) => 
          <li key={index}>
            {movie._id} {"  is  "} {movie.title}
          </li>
      )}
      </ul>
      <br/>
      
    </div>
  );
}
