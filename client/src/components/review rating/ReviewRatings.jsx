import React, { Component } from 'react';
import '../../styles/reviewAndRating/reviewRating.scss';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewBody from './ReviewBody.jsx';
import Grid from '@material-ui/core/Grid';

export default class ReviewRatings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid style={{ margin: '20px' }} container spacing={2}>
        <Grid item xs={6}>
          <ReviewSummary />
        </Grid>
        <Grid item xs={6}>
          <ReviewBody />
        </Grid>
      </Grid>
    );
  }
}
