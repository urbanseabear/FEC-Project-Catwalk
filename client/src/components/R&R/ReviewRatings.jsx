import React, { useState, useEffect } from 'react';
import ReviewSummary from './summary section/ReviewSummary';
import ReviewBody from './review section/Review Body/ReviewBody';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');

const ReviewRatings = ({ productId, page, count, productName }) => {
  const [data, setData] = useState([]);
  const [metaData, setmetaData] = useState([]);
  const [sortBy, setsortBy] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // make GET req  when productID changes to update Data & MetaData
  useEffect(() => {
    updateData();
    updateMetaData();
  }, [productId]);

  // make GET req when user selects sort by option to update Data, then filter that updated data
  useEffect(() => {
    updateData();
    filterData();
  }, [sortBy]);

  // this filters the review by star rating, if user clicks on 5, then only reviews rated 5 will be shown
  const filterData = (rating) => {
    const filterArray = data.filter((item) => {
      return item.rating === rating;
    });
    setFilteredData(filterArray);
  };

  // GET req
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

  // GET req
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

  // invoked when a sort by option is selected
  const sortByType = (type) => {
    setsortBy(type);
  };

  return (
    <Grid style={{ marginTop: '10px' }} container spacing={6}>
      <Grid item xs={3}>
        <p style={{ marginTop: '-15px' }}>RATINGS & REVIEWS</p>
        <ReviewSummary
          data={data}
          metaData={metaData}
          filterData={filterData}
        />
      </Grid>
      <Grid item xs={9}>
        <ReviewBody
          data={data}
          sortByType={sortByType}
          metaData={metaData}
          filteredData={filteredData}
          productName={productName}
        />
      </Grid>
    </Grid>
  );
};

export default ReviewRatings;
