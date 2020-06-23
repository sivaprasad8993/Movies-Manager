import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({columns,onSort,sortColumn,newMovies}) => {
    return ( 
        <table className='table'>
            <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
            <TableBody columns = {columns} movies={newMovies} />
        </table>
     );
}
 
export default Table;