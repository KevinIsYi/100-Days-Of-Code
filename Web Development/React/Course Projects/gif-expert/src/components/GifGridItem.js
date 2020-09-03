import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({url}) => {
    return (
        <img className="animate__fadeInLeft" src={url} alt="gif">
        </img>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired
}
