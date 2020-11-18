import React from 'react';
import Rating from '@material-ui/lab/Rating';

const StarRating = (props) => {
  const rating = props.rating || null;
  const star = props.starNum;

  return (
    <div>
      <h1 style={{ fontSize: '60px', marginTop: '-10px' }}>
        {rating}
        <Rating
          name='half-rating-1'
          defaultValue={0}
          value={parseInt(star)}
          precision={0.25}
          readOnly
          size='large'
          max={5}
        />
      </h1>
    </div>
  );
};

export default StarRating;
