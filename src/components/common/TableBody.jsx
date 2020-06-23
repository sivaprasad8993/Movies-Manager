import React from 'react';
import _ from 'lodash';

const TableBody = ({movies,columns}) => {

    const getColumnData = (movie,column) => {
        if(column.content) return column.content(movie);
        else return _.get(movie,column.path);
    }

    return ( 
        <tbody> 
            {movies.map(movie => (
                <tr key={movie._id}>{columns.map(column => (<td key={movie._id+(column.path||column.key)}>{getColumnData(movie,column)}</td>))}</tr>
            ))}
        </tbody>
    );
}
 
export default TableBody;