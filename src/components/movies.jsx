import React, { useState, useEffect} from 'react';
import http from '../services/httpService';



export default function Movies() {
  const [movies, setMovies ] = useState([]);
  // const [err, setError] = useState("");
  const endpoint ="http://localhost:5000/api/movies";


  useEffect( () => {
    async function fetchData() {
      const promise = http.get(endpoint);
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
  },[]);

  const addMovie = async () => {
    const movie = {
      title: "my brothers",
      genreId: "5f9f3377aa82f8ad2fddebaa",
      numberInStock: 24,
      dailyRentalRate: 25
    };
    const promise = http.post(endpoint,movie);
    const { data } = await promise;
    console.log(data);
  };

  // put: update all the fields required:
  // patch: a part of fields
  const updateMovie = async () => {
    const movie = {
      title: "my grand brother",
      genreId: "5f9f3377aa82f8ad2fddebaa",
      numberInStock: 66,
      dailyRentalRate: 88
    };
    const movieid = '5fb45796a153c51c1ad5aa09';
    const updateEndPoint =  `${endpoint}/${movieid}`;
    const promise = http.put(updateEndPoint, movie);
    const { data } = await promise;
    console.log(data);
  };

  const deleteMovie = async () => {
   
    const movieid = '5fb47aa9a153c51c1ad5aa8d';
    const deleteEndpoint = `${endpoint}/${movieid}`;
    const promise = http.delete(deleteEndpoint);
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
      <button onClick={addMovie} >Add a new Movie</button>
      <button onClick={updateMovie} >update Movie</button>
      <button onClick={deleteMovie} >delete Movie</button>
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
