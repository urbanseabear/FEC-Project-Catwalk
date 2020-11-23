import React from 'react';
import ReviewList from './ReviewList';
import ReviewButtons from './ReviewButtons';
import SortBy from './SortBy';

const ReviewBody = ({ data, sortBy, metaData }) => {
  let totalReviewCount = 0;

  data.map(() => {
    totalReviewCount += 1;
  });

  return (
    <div>
      <SortBy totalCount={totalReviewCount} sortBy={sortBy} />
      <ReviewList data={data} />
      <ReviewButtons metaData={metaData} />
    </div>
  );
};

export default ReviewBody;
