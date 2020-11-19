import React from 'react';
import ReviewList from './ReviewList';
import ReviewButtons from './ReviewButtons';
import SortBy from './SortBy';

const ReviewBody = ({ data, sortBy }) => {
  let totalReviewCount = 0;

  data.map(() => {
    totalReviewCount += 1;
  });

  return (
    <div>
      <SortBy totalCount={totalReviewCount} sortBy={sortBy} />
      <ReviewList data={data} />
      <ReviewButtons />
    </div>
  );
};

export default ReviewBody;
