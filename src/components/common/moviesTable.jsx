import React from 'react';
import Like from "../common/like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onUpdate, onSort } = props;

  return (<table className="table">
    <tr>
      <th onClick={() => onSort("title")}>Title</th>
      <th onClick={() => onSort("Genre")}>Genre</th>
      <th onClick={() => onSort("stock")}>Stock</th>
      <th onClick={() => onSort("rate")}>Rate</th>
      <th>{""}</th>
      <th>{""}</th>
      <th>{""}</th>
    </tr>
    <tbody>
      {movies.map((movie, index) =>
        <tr key={index}>
          <td>{movie.title}</td>
          <td>{movie.Genre}</td>
          <td>{movie.stock}</td>
          <td>{movie.rate}</td>
          <td><Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
          <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
          <td><button onClick={() => onUpdate(movie)} className="btn btn-info btn-sm">Update</button></td>
        </tr>
      )}
    </tbody>
  </table> );
}
 
export default MoviesTable;
