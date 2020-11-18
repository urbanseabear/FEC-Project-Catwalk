import React, { Component } from 'react';
import ReviewSummary from './summary section/ReviewSummary';
import ReviewBody from './review section/ReviewBody';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

export default class ReviewRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.productId,
      sort: '',
      page: props.page,
      count: props.count,
      data: [],
    };

    this.sortBy = this.sortBy.bind(this);
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
          sort: this.state.sort,
          product_id: this.state.productId,
        },
      })
      .then((res) => this.setState({ data: res.data.results }))
      .catch((err) => console.log(err));
  }

  sortBy(type) {
    this.setState({ sort: type }, () => {
      this.update();
    });
  }

  render() {
    return (
      <Grid style={{ marginTop: '10px' }} container spacing={8}>
        <Grid item xs={3}>
          <p style={{ marginTop: '-15px' }}>RATINGS & REVIEWS</p>
          <ReviewSummary data={this.state.data} />
        </Grid>
        <Grid item xs={9}>
          <ReviewBody data={this.state.data} sortBy={this.sortBy} />
        </Grid>
      </Grid>
    );
  }
}
