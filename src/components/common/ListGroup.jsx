import React from 'react';

const ListGroup = ({genres,onGenreSelected,selectedGenre,id,value}) => {
    return (<div className='list-group'>
        {genres.map(genre => (
            <li key = {genre[id]} className={`list-group-item ${selectedGenre === genre ? 'active':''}`} onClick={() => onGenreSelected(genre)} style = {{cursor: 'pointer'}}>
                {genre[value]}
            </li>
        ))}
    </div>);
 }

 ListGroup.defaultProps = {
     id: '_id',
     value: 'name'
 }


 
export default ListGroup;