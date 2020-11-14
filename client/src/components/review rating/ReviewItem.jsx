import React, { Component } from 'react';
import StarRating from './StarRating.jsx';

export default class ReviewItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StarRating />
        <h1>Review title with word-break truncation to prevent wrapping</h1>
        <p>
          This is some sample review body text. This is some sample review body
          text. This is some sample review body text. This is some sample review
          body text.
        </p>
        <span>Helpful? Yes (0) | Report</span>
        <div
          style={{
            paddingTop: '30px',
            borderBottom: 'solid',
            borderStyle: 'thin',
            borderBottomColor: 'lightGrey',
          }}></div>
      </div>
    );
  }
}
