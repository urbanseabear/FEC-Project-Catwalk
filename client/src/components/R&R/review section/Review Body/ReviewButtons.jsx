import React from 'react';
import Button from '@material-ui/core/Button';
import AnimatedModal from '../Modal/Modal';

const ReviewButtons = ({ metaData, click, data }) => {
  let noMoreItems = data.length !== 0;

  let moreReviews = () => {
    return (
      <div style={{ paddingRight: '30px' }}>
        <Button
          style={{ fontSize: '25px' }}
          variant='contained'
          onClick={() => click()}>
          MORE REVIEWS
        </Button>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      {noMoreItems ? moreReviews() : ''}
      <AnimatedModal metaData={metaData} />
    </div>
  );
};

export default ReviewButtons;
