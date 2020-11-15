import React, { useState } from 'react';
import '../styles/main.scss';
import Overview from './overview/overview.jsx';
import QAmodule from './Q&A/QAmodule';
import ReviewRatings from './review rating/ReviewRatings.jsx';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Overview />
        </Grid>
        <Grid style={{ margin: '0% 10%' }} item xs={12}>
          <QAmodule />
        </Grid>
        <Grid style={{ margin: '0% 10%' }} item xs={12}>
          <ReviewRatings />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
