import React from 'react';
import Button from '@material-ui/core/Button';
import AnimatedModal from '../Modal/Modal';

const ReviewButtons = ({ metaData, addTwo, data, productName }) => {
  let moreReviews = () => {
    return (
      <div style={{ paddingRight: '30px' }}>
        <Button
          color='primary'
          style={{
            fontSize: '20px',
          }}
          variant='contained'
          onClick={() => addTwo()}>
          MORE REVIEWS
        </Button>
      </div>
    );
  };

  // <AnimatedModal/> is 'ADD REVIEW' button, once clicked the modal appears
  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      {data ? moreReviews() : ''}
      <AnimatedModal metaData={metaData} productName={productName} />
    </div>
  );
};

export default ReviewButtons;
