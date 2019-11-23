import React from 'react';
import './search-box.styles.css'

/**
 * type can be 'password', etc. HTML property that all inputs have.
 * placeholder = grey text
 * type 'search' allows for placeholder.
 * e in onChange stands for event.
 * 'placeholder' & 'handleChange' is destructured from props
 */
export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}/>
    );
};