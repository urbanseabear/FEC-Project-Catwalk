import React, { Component } from 'react';
import StarRating from './StarRating.jsx';
import '../../styles/review rating/ReviewItem.scss';
const moment = require('moment');

export default class ReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.data.body,
      date: props.data.date,
      helpful: props.data.helpfulness,
      photos: props.data.photo,
      rating: props.data.rating,
      recommend: props.data.recommend,
      response: props.data.response,
      reviewId: props.data.review_id,
      reviewerName: props.data.reviewer_name,
      summary: props.data.summary,
    };
  }

  render() {
    let recommended = this.state.recommend !== 0;
    let response = this.state.response === 'null';

    return (
      <div className='item-wrapper'>
        <span style={{ float: 'right', marginTop: '24px' }}>
          {this.state.reviewerName} |
          {moment(this.state.date).format('MMMM Do YYYY')}
        </span>
        <StarRating starNum={this.state.rating} />
        <h1>{this.state.summary}</h1>
        <p className='item-body'>{this.state.body}</p>
        <div>{recommended ? <span>√ I recommend this product</span> : ''}</div>
        {response || this.state.response === '' ? (
          ''
        ) : (
          <div className='item-response'>
            <div style={{ margin: '10px' }}>
              <span>Response:</span>
            </div>
            <div style={{ margin: '10px' }}>
              <span>{this.state.response}</span>
            </div>
          </div>
        )}
        <div>
          <span>Helpful? Yes ({this.state.helpful}) | Report</span>
        </div>
        <div className='item-response-border'></div>
      </div>
    );
  }
}
