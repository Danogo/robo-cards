import React from 'react';

const SearchBox = ({searchChange}) => {
return (
  // every time input changes run searchChange function passed from App parent component
  <div className="pa2">
    <input 
      aria-label='search robots'
      className="pa3 ba b--green bg-lightest-blue" 
      type="search" 
      placeholder="search robots" 
      onChange={searchChange}
    />
  </div>
);
};

export default SearchBox;