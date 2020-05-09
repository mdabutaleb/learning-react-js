import React from 'react';

const SearchBox = ({value, handleSearch}) => {
    return (
        <input onChange={e => handleSearch(e.target.value)}
               value={value}
               className="form-control my-3 px-3"
               type="text"
               placeholder="Search..."/>
    );
}

export default SearchBox;

