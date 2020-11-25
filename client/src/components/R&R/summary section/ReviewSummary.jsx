import React, { useState } from 'react';
import AverageRating from '../rating section/AverageRating';
import RatingBar from '../rating section/RatingBar';
import { ratingBar, recommended } from '../utils/helper.js';
import CharRatingList from './CharRatingList';
import Button from '@material-ui/core/Button';

const ReviewSummary = ({ data, metaData, filterOnClick }) => {
  let ratingCount = 0;
  let recommendCount = 0;

  const [filterOn, setFilterOn] = useState(false);

  let count = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  const removeFilter = () => {
    setFilterOn(true);
  };

  data.map((item) => {
    ratingCount += item.rating;
    recommendCount += item.recommend;
    count[item.rating] += 1;
  });

  let average = ratingBar(ratingCount, data.length);
  let recommend = recommended(recommendCount, data.length);

  return (
    <div>
      <AverageRating average={average} />
      <p>Rating Breakdown</p>
      <RatingBar
        starNum={5}
        count={count[5]}
        click={filterOnClick}
        filterOn={filterOn}
      />
      <RatingBar
        starNum={4}
        count={count[4]}
        click={filterOnClick}
        filterOn={filterOn}
      />
      <RatingBar
        starNum={3}
        count={count[3]}
        click={filterOnClick}
        filterOn={filterOn}
      />
      <RatingBar
        starNum={2}
        count={count[2]}
        click={filterOnClick}
        filterOn={filterOn}
      />
      <RatingBar
        starNum={1}
        count={count[1]}
        click={filterOnClick}
        filterOn={filterOn}
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
