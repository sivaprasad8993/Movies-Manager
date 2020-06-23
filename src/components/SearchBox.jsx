import React from 'react';

const SearchBox = ({ value, onChange }) => {
    return (
        <input type="text" placeholder='Search...' className='form-control' name='query' value={value}
            onChange={e => onChange(e.currentTarget.value)} style={{ overflow: 'hidden' }} />
    );
}

export default SearchBox;