import React, { Component } from 'react'
import Like from "../common/like";
import Table from './table';
class MoviesTable extends Component {

  columns = [
    {path: "title", label:"Title"},
    { path: "genre", label:"Genre"},
    { path: "stock", label:"Stock"},
    { path: "rate", label:"Rate"},
    { key: "Like", 
      content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
    },
    { key: "Delete", 
      content: movie =><button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
    },
    { key: "Update",
      content: movie => <button onClick={() => this.props.onUpdate(movie)} className="btn btn-info btn-sm">Update</button>
    },
  ];

  raiseSort = path => {
    this.props.onSort(path);
  };
  
  render() { 
    const { movies,  sortColumn } = this.props;

    return (
      <Table 
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={this.raiseSort}
        data={movies}
      />
    );
  };

}

export default MoviesTable;

