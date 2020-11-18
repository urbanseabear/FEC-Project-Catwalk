import React from 'react';
import ReviewItem from './ReviewList';

const ReviewList = ({ data }) => {
  const item = data.map((item) => {
    return (
      <div key={item.review_id}>
        <ReviewItem data={item} />
      </div>
    );
  });

  return <div>{item}</div>;
};

export default ReviewList;
