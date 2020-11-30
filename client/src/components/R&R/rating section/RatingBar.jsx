import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import '../../../styles/R&R/RatingBar.scss';

const RatingBar = ({
  starNum,
  count,
  filterData,
  filterOn,
  checkForFilter,
}) => {
  const [clicked, setClicked] = useState(false);
  const [filter, setFilter] = useState(filterOn);

  // updates filterIsOn variable in ReviewSummary if user clicks a star and that product HAS reviews for that rating
  // if a star is clicked that has 0 ratings, then filterIsOn remains false OR it's current state
  useEffect(() => {
    clicked && count ? checkForFilter(true) : checkForFilter(false);
  }, [clicked]);

  // checks if filterOn (boolean) changes state
  // filterData refers to 'filterData' in ReviewRatings. If filterOn is true, then 'filterData()' is called with an empty string, otherwise filterData is passed the current star value
  // in ReviewRatings, filterData() is passed starNum, which filters only the reviews with that star
  useEffect(() => {
    filter ? filterData('') : filterData(starNum);
    setFilter(!filter);
  }, [filterOn]);

  // this checks if a star was clicked, if it was & that star has more than 0 ratings, than filter that star
  const filtered = () => {
    if (clicked) {
      !count ? null : filterData('');
      setClicked(!clicked);
    } else {
      count ? filterData(starNum) : null;
      setClicked(!clicked);
    }
  };

  // this fills in the progress bar green with the total % of star ratings
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
