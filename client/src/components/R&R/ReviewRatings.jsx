import React, { useState, useEffect } from 'react';
import ReviewSummary from './summary section/ReviewSummary';
import ReviewBody from './review section/Review Body/ReviewBody';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

const ReviewRatings = ({ productId, page, count }) => {
  const [data, setData] = useState([]);
  const [metaData, setmetaData] = useState([]);
  const [sortBy, setsortBy] = useState('');

  useEffect(() => {
    updateData();
    updateMetaData();
  }, [productId]);

  useEffect(() => {
    updateData();
  }, [sortBy]);

  const updateData = () => {
    axios
      .get('http://3.21.164.220/reviews/', {
        params: {
          page: page,
          count: count,
          sort: sortBy,
          product_id: productId,
        },
      })
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };

  const updateMetaData = () => {
    axios
      .get('http://3.21.164.220/reviews/meta', {
        params: {
          product_id: productId,
        },
      })
      .then((res) => setmetaData(res.data.characteristics))
      .catch((err) => console.log(err));
  };

  const sortByType = (type) => {
    setsortBy(type);
  };

  return (
    <Grid style={{ marginTop: '10px' }} container spacing={6}>
      <Grid item xs={3}>
        <p style={{ marginTop: '-15px' }}>RATINGS & REVIEWS</p>
        <ReviewSummary data={data} metaData={metaData} />
      </Grid>
      <Grid item xs={9}>
        <ReviewBody data={data} sortBy={sortByType} metaData={metaData} />
      </Grid>
    </Grid>
  );
};

export default ReviewRatings;
