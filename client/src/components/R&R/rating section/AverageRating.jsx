import React from 'react';
import StarRating from './StarRating';

const AverageRating = ({ average }) => {
  return (
    <div>
      <StarRating
        rating={average}
        starNum={average}
        readOnly={true}
        precision={0.25}
      />
    </div>
  );
};

export default AverageRating;
