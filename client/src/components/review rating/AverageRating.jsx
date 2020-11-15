import React from 'react';
import StarRating from './StarRating.jsx';

const AverageRating = () => {
  return (
    <div>
      <StarRating rating={3.5} />
      <p>100% of reviews recommend this product</p>
    </div>
  );
};

export default AverageRating;
