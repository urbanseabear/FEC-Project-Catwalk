import React, { useState } from 'react';
import AverageRating from '../rating section/AverageRating';
import RatingBar from '../rating section/RatingBar';
import { ratingBar, recommended } from '../utils/helper.js';
import CharRatingList from './CharRatingList';
import Button from '@material-ui/core/Button';

const ReviewSummary = ({ data, metaData, filterOnClick }) => {
  let ratingCount = 0;
  let recommendCount = 0;
  let filterIsOn = false;

  // filterOn inital value is false, will change once user stars clicking stars to filter
  const [filterOn, setFilterOn] = useState(false);

  // gives me the count for each star
  let count = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  // this fires when user clicks on star, indicating that a filter is on (see RatingBar)
  const checkForFilter = (boolean) => {
    if (boolean) {
      filterIsOn = true;
    } else {
      filterIsOn = false;
    }
  };

  // if filterIsOn is true, then flip the boolean of filterOn, which is passed down to RatingBar
  const removeFilter = () => {
    if (filterIsOn) {
      setFilterOn(!filterOn);
    }
  };

  data.map((item) => {
    ratingCount += item.rating;
    recommendCount += item.recommend;
    count[item.rating] += 1;
  });

  // helper functions (see helper.js)
  let average = ratingBar(ratingCount, data.length);
  let recommend = recommended(recommendCount, data.length);

  return (
    <div>
      <AverageRating average={average} />
      <p>Rating Breakdown</p>
      <RatingBar
        starNum={5}
        count={count[5]}
        filterData={filterOnClick}
        filterOn={filterOn}
        checkFilter={checkForFilter}
      />
      <RatingBar
        starNum={4}
        count={count[4]}
        filterData={filterOnClick}
        filterOn={filterOn}
        checkFilter={checkForFilter}
      />
      <RatingBar
        starNum={3}
        count={count[3]}
        filterData={filterOnClick}
        filterOn={filterOn}
        checkFilter={checkForFilter}
      />
      <RatingBar
        starNum={2}
        count={count[2]}
        filterData={filterOnClick}
        filterOn={filterOn}
        checkFilter={checkForFilter}
      />
      <RatingBar
        starNum={1}
        count={count[1]}
        filterData={filterOnClick}
        filterOn={filterOn}
        checkFilter={checkForFilter}
      />
      <p>{recommend}% of reviews recommend this product</p>
      <Button
        onClick={() => removeFilter()}
        variant='contained'
        color='primary'>
        Remove Filters
      </Button>
      <CharRatingList metaData={metaData} />
    </div>
  );
};

export default ReviewSummary;
