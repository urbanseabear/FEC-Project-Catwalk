import React, { Component } from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewBody from './ReviewBody.jsx';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

export default class ReviewRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.productId,
      sortBy: props.sortBy,
      page: props.page,
      count: props.count,
      data: [],
    };
  }

  componentDidMount() {
    this.update();
  }

  update() {
    axios
      .get('http://3.21.164.220/reviews/', {
        params: {
          page: this.state.page,
          count: this.state.count,
          sort: this.state.sortBy,
          product_id: this.state.productId,
        },
      })
      .then((res) => this.setState({ data: res.data.results }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Grid style={{ marginTop: '10px' }} container spacing={8}>
        <Grid item xs={3}>
          <p style={{ marginTop: '-15px' }}>RATINGS & REVIEWS</p>
          <ReviewSummary data={this.state.data} />
        </Grid>
        <Grid item xs={9}>
          <ReviewBody data={this.state.data} />
        </Grid>
      </Grid>
    );
  }
}
