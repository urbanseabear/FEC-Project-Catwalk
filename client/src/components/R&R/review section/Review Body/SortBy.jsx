import React from 'react';
import '../../../../styles/R&R/SortBy.scss';

const SortBy = ({ totalCount, sortBy }) => {
  const handleChange = (option) => {
    sortBy(option);
  };
  return (
    <div className='dropdown-wrapper'>
      <h2>{totalCount} reviews, sorted by</h2>
      <select
        className='sort-by-dropdown'
        onChange={(e) => handleChange(e.target.value)}>
        <option value='relevance'>relevance</option>
        <option value='helpful'>helpful</option>
        <option value='newest'>newest</option>
      </select>
    </div>
  );
};

export default SortBy;
