import http from '../services/httpService';

const apiEndpoint = "http://localhost:5000/api/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + '/' +movieId);
}
