import React from 'react';
import Like from './common/Like';
import Table from './common/Table';
import {Link} from 'react-router-dom';

const MoviesTable = ({newMovies,onDelete,onLike,onSort,sortColumn}) => {

    const columns = [
        {label: 'Title',path:'title',content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {label: 'Genre',path:'genre.name'},
        {label: 'Stock',path:'numberInStock'},
        {label: 'Rate',path:'dailyRentalRate'},
        {key:"like" ,
            content: movie => <Like liked={movie.liked} toggleLike={() => onLike(movie)} />
        },
        {key:"delete",
            content: movie => <button className='btn btn-danger' onClick={() => onDelete(movie)}>Delete</button>
        }
    ]
    return ( 
        <Table newMovies={newMovies} onSort={onSort} sortColumn={sortColumn} columns={columns}/>
     );
}
 
export default MoviesTable;