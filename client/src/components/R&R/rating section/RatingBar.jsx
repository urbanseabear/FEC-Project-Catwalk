import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import './RatingBar.scss';

export default class RatingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { hover } = this.state;
    const { starNum, count } = this.props;
    const percentage = (count * 100) / 10;

    const hasReviews = (
      <div style={{ float: 'right', marginTop: '14px' }}>
        <Badge badgeContent={count} color={'primary'}></Badge>
      </div>
    );

    return (
      <div>
        <div className='rating-bar-wrapper'>
          <p className='rating-bar-star-number'>{starNum}</p>
          <p style={{ marginTop: '-1.1%', paddingRight: '15px' }}>Stars</p>
          <div
            className='empty-bar'
            style={{
              WebkitBoxShadow: `${
                hover && count ? '3px 3px 4px 3px #ccc' : 'none'
              }`,
            }}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <div className='filler-bar' style={{ width: `${percentage}%` }}>
              {count ? hasReviews : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
