import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
/* import { TrackerProvider, Tracker } from 'react-tracker';
   import { trackAddQuestion } from './tracking/trackQAmodule';

const tracker = new Tracker();
const searchListener = (event, eventsHistory) => {
    window.dataLayer.push(event);
    return event;
};
const searchEvent = (time, module) => ({  type: 'SEARCH_CLICK',  data: {time, module}});

tracker.on('SEARCH_CLICK', searchListener);*/


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);