import React from 'react';
import Rating from '@material-ui/lab/Rating';

const StarRating = (props) => {
  const rating = props.rating || null;
  const star = props.starNum;
  const readOnly = props.readOnly;
  const precision = props.precision || 1;

  return (
    <div>
      <h1 style={{ fontSize: '60px', marginTop: '-10px' }}>
        {rating}
        <Rating
          name='half-rating-read'
          defaultValue={0}
          value={parseFloat(star)}
          precision={precision}
          readOnly={readOnly}
          size='large'
          max={5}
        />
      </h1>
    </div>
  );
};

export default StarRating;
