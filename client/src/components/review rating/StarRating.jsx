import React from 'react';
import Rating from '@material-ui/lab/Rating';

const StarRating = (props) => {
  const rating = props.rating || null;
  return (
    <div>
      <h1 style={{ fontSize: '60px' }}>
        {rating} <Rating name='size-large' defaultValue={0} size='large' />
      </h1>
    </div>
  );
};

export default StarRating;
