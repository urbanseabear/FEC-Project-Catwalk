import React from 'react';

const SearchBar = ({ onSearch }) => {

  const onSearchEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      onSearch(e.target.value);
      e.target.value = '';
      e.target.blur();
    }
  };

  return (
    <input 
      type='text' 
      id='searchBar' 
      placeholder='Search...'
      onKeyPress={onSearchEnter}
      style={{backgroundImage: 'url(./images/search.png)' }} 
    />
  );
};

export default SearchBar;