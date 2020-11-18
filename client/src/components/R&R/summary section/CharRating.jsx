import React from 'react';
import Grid from '@material-ui/core/Grid';
import './CharRating.scss';

const CharRating = ({ labelTitle, leftLabel, middleLabel, rightLabel }) => {
  const optionalLeftLabel = leftLabel ? <span>{leftLabel}</span> : '';
  const optionalMiddleLabel = middleLabel ? <span>{middleLabel}</span> : '';
  const optionalRightLabel = rightLabel ? <span>{rightLabel}</span> : '';

  return (
    <div className='char-wrapper'>
      <div className='label-title'>
        <span>{labelTitle}</span>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <div className='outer-bar'>
            <div className='inner-bar'></div>
            <div className='label-left'>
              <span>{optionalLeftLabel}</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='outer-bar'>
            <div className='inner-bar'></div>
            <div className='label-center'>{optionalMiddleLabel}</div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='outer-bar'>
            <div className='inner-bar'></div>
            <div className='label-right'>
              <span>{optionalRightLabel}</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CharRating;
