import React from 'react';

const SearchBar = (props) => {
    return(
            <input
            onChange={props.changeSearchPokemon} 
            placeholder="Search Pokemon"
            className="search">

            </input>
    )
}
export default SearchBar;