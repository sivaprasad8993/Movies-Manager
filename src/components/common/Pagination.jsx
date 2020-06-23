import React from 'react';
import _ from 'lodash';
import Proptypes from 'prop-types';

const Pagination = ({currentPage,pageSize,count,onClick}) => {
    const pageCount = Math.ceil(count/pageSize);
    const pages = _.range(1,pageCount+1);
    if(pageCount === 1) return null;
    return ( 
        <nav className='m-5'>
            <ul className='pagination'>
                {pages.map(page => (
                    <li className={`page-item ${currentPage === page ? 'active' : ''}`} style = {{cursor: 'pointer'}} key={page}>
                        <a className = 'page-link' href="#!" onClick={() => onClick(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}

Pagination.propTypes = {
    currentPage: Proptypes.number.isRequired,
    pageSize: Proptypes.number.isRequired,
    count: Proptypes.number.isRequired,
    onClick: Proptypes.func.isRequired
}
 
export default Pagination;