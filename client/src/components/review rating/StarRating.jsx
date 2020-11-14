import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rating = this.props.rating || null;
    return (
      <div>
        <h1 style={{ fontSize: '60px' }}>
          {rating} <Rating name='size-small' defaultValue={0} size='large' />
        </h1>
      </div>
    );
  }
}
