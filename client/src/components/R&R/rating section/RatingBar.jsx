import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import '../../../styles/R&R/RatingBar.scss';

const RatingBar = ({ starNum, count }) => {
  const [hover, setHover] = useState(null);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const percentage = (count * 100) / 10;

  const hasReviews = (
    <div style={{ float: 'right', marginTop: '14px' }}>
      <Badge badgeContent={count} color={'primary'}></Badge>
    </div>
  );

  return (
    <div>
      <div className='rating-bar-wrapper'>
        <p className='rating-bar-star-number'>{starNum}</p>
        <p style={{ marginTop: '-1.1%', paddingRight: '15px' }}>Stars</p>
        <div
          className='empty-bar'
          style={{
            WebkitBoxShadow: `${
              hover && count ? '3px 3px 4px 3px #ccc' : 'none'
            }`,
          }}
          onMouseEnter={() => handleMouseEnter}
          onMouseLeave={() => handleMouseLeave}>
          <div className='filler-bar' style={{ width: `${percentage}%` }}>
            {count ? hasReviews : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingBar;
