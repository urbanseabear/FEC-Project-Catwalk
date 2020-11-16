import React from 'react';
import AverageRating from './AverageRating.jsx';
import RatingBar from './RatingBar.jsx';
import Factor from './Factors.jsx';

const ReviewSummary = () => {
  return (
    <div>
      <AverageRating />
      <RatingBar starNum={5} />
      <RatingBar starNum={4} />
      <RatingBar starNum={3} />
      <RatingBar starNum={2} />
      <RatingBar starNum={1} />
      <div style={{ paddingTop: '30px' }}></div>
    </div>
  );
};

export default ReviewSummary;
