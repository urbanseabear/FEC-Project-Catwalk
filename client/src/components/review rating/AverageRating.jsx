import React, { Component } from 'react';
import StarRating from './StarRating.jsx';

export default class AverageRating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StarRating rating={3.5} />
        <p>100% of reviews recommend this product</p>
      </div>
    );
  }
}
