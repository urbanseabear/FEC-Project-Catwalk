import React, { useState } from 'react';
import '../styles/main.scss';
import Overview from './overview/overview.jsx';
import QAmodule from './Q&A/QAmodule';
import ReviewRatings from './review rating/ReviewRatings.jsx';

const App = () => {
  return (
    <div>
      <Overview />
      <QAmodule />
      <ReviewRatings />
    </div>
  );
};

export default App;
