import React, { Component } from 'react';
import ReviewItem from './ReviewItem.jsx';
import Grid from '@material-ui/core/Grid';
import SortBy from './SortBy.jsx';

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item>
            <SortBy />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </Grid>
        </Grid>
      </div>
    );
  }
}
