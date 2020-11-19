import React from 'react';
import StarRating from './StarRating';

const AverageRating = ({ average, recommended }) => {
  return (
    <div>
      <StarRating rating={average} starNum={average} />
      <p>{recommended}% of reviews recommend this product</p>
    </div>
  );
};

export default AverageRating;
