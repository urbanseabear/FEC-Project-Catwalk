import React from 'react';
import Button from '@material-ui/core/Button';
import AnimatedModal from './Modal';

const ReviewButtons = ({ metaData }) => {
  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <Button style={{ fontSize: '25px' }} variant='contained'>
        MORE REVIEWS
      </Button>
      <div style={{ paddingRight: '30px' }}></div>
      <AnimatedModal metaData={metaData} />
    </div>
  );
};

export default ReviewButtons;
