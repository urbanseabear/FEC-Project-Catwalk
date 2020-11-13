import React, { useState } from 'react';
import '../styles/main.scss';
import Overview from './overview/overview.jsx';
import QAmodule from './Q&A/QAmodule';

const App = () => {
  return (
    <div>
      <Overview />
      <QAmodule />
    </div>
  );
};

export default App;
