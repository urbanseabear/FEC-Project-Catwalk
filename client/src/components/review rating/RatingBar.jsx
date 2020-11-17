import React from 'react';
import '../../styles/review rating/RatingBar.scss';

const RatingBar = ({ starNum, count }) => {
  let percentage = (count * 100) / 10;

  return (
    <div className='rating-bar-wrapper'>
      <p className='rating-bar-star-number'>{starNum}__stars</p>
      <div className='empty-bar'>
        <div className='filler-bar' style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default RatingBar;
