import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ data, count }) => {
  // slicedData will either be all of the reviews or some of them
  let slicedData = data.slice(0, count);

  const item = slicedData.map((item) => {
    return (
      <div key={item.review_id}>
        <ReviewItem data={item} />
      </div>
    );
  });

  return <div>{item}</div>;
};

export default ReviewList;
