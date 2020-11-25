import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AnimatedModal from '../Modal/Modal';

const ReviewButtons = ({ metaData, click, data }) => {
  let moreReviews = () => {
    return (
      <div style={{ paddingRight: '30px' }}>
        <Button
          color='primary'
          style={{
            fontSize: '20px',
          }}
          variant='contained'
          onClick={() => click()}>
          MORE REVIEWS
        </Button>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      {data ? moreReviews() : ''}
      <AnimatedModal metaData={metaData} />
    </div>
  );
};

export default ReviewButtons;
