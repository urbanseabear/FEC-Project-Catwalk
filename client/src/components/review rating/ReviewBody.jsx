import React, { Component } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewButtons from './ReviewButtons.jsx';

export default class ReviewBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReviewList />
        <ReviewButtons />
      </div>
    );
  }
}
