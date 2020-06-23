import React from 'react';
import PropTypes from 'prop-types';

const Like = ({liked,toggleLike}) => {
    return ( 
        <i className={`${liked ? 'fa fa-heart':'fa fa-heart-o'}`} onClick = {toggleLike} style = {{cursor: 'pointer'}}></i>
     );
}

Like.propTypes = {
    liked: PropTypes.bool,
    toggleLike: PropTypes.func.isRequired
}
 
export default Like;