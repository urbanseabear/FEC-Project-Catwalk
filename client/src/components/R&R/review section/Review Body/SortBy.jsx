import React from 'react';
import '../../../../styles/R&R/SortBy.scss';

const SortBy = ({ totalReviewCount, sortByType }) => {
  // sortBy is passed down from parent component, handleChange() will also be called in ReviewRatings [sortByType]
  // this makes a GET request with the type to be sorted by
  const handleChange = (option) => {
    sortByType(option);
  };
  return (
    <div className='dropdown-wrapper'>
      <h2>{totalReviewCount} reviews, sorted by</h2>
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
