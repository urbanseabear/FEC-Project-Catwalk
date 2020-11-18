import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewButtons from './ReviewButtons.jsx';
import SortBy from './SortBy.jsx';

const ReviewBody = ({ data }) => {
  let totalReviewCount = 0;

  data.map(() => {
    totalReviewCount += 1;
  });

  return (
    <div>
      <SortBy totalCount={totalReviewCount} />
      <ReviewList data={data} />
      <ReviewButtons />
    </div>
  );
};

export default ReviewBody;
