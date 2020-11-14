import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class ReviewButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button style={{ fontSize: '30px' }} variant='contained'>
          MORE REVIEWS
        </Button>
        <Button
          style={{ margin: '20px', fontSize: '30px' }}
          variant='contained'>
          ADD A REVIEW
        </Button>
      </div>
    );
  }
}
