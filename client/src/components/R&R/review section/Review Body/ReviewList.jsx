import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ data, count }) => {
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
