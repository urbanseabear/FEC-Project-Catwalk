import React, { Component } from 'react';
import AverageRating from './AverageRating.jsx';
import Grid from '@material-ui/core/Grid';

export default class ReviewSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item>
            <h1>RATINGS & REVIEWS</h1>
            <AverageRating />
          </Grid>
        </Grid>
      </div>
    );
  }
}
