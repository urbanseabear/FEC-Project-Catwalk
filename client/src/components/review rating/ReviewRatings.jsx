import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewBody from './ReviewBody.jsx';
import Grid from '@material-ui/core/Grid';

const ReviewRatings = () => {
  return (
    <Grid style={{ marginTop: '20px' }} container spacing={8}>
      <Grid item xs={12}>
        <h1>RATINGS & REVIEWS</h1>
      </Grid>
      <Grid item xs={3}>
        <ReviewSummary />
      </Grid>
      <Grid item xs={9}>
        <ReviewBody />
      </Grid>
    </Grid>
  );
};

export default ReviewRatings;
