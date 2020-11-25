import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import '../../../styles/R&R/RatingBar.scss';

const RatingBar = ({ starNum, count, click, filterOn }) => {
  const [clicked, setClicked] = useState(false);
  const [filter, setFilter] = useState(filterOn);

  useEffect(() => {
    filter ? click('') : click(starNum);
    setFilter(!filter);
  }, [filterOn]);

  const filtered = () => {
    if (clicked) {
      count ? click('') : null;
      setClicked(!clicked);
    } else {
      count ? click(starNum) : null;
      setClicked(!clicked);
    }
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
        <div className='empty-bar' onClick={() => filtered()}>
          <div
            className='filler-bar'
            style={{
              width: `${percentage}%`,
            }}>
            {count ? hasReviews : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingBar;
