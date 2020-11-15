import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewButtons from './ReviewButtons.jsx';
import SortBy from './SortBy.jsx';

const ReviewBody = () => {
  return (
    <div>
      <SortBy />
      <ReviewList />
      <ReviewButtons />
    </div>
  );
};

export default ReviewBody;
