import React, { Component } from 'react';
import StarRating from '../rating section/StarRating';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckIcon from '@material-ui/icons/Check';
import { maxCharLength } from '../utils/helper.js';
import './ReviewItem.scss';
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
      currentList: [],
    };
  }

  render() {
    let recommended = this.state.recommend !== 0;
    let response = this.state.response;

    return (
      <div className='item-wrapper'>
        <span style={{ float: 'right', marginTop: '24px' }}>
          <CheckCircleIcon style={{ fontSize: '13px', paddingRight: '4px' }} />
          {this.state.reviewerName} |{' '}
          {moment(this.state.date).format('MMMM Do YYYY')}
        </span>

        <StarRating
          starNum={this.state.rating}
          readOnly={true}
          precision={0.25}
        />
        <h1 style={{ fontSize: '23px' }}>
          {maxCharLength(this.state.summary, 60)}
        </h1>
        <p className='item-body'>{this.state.body}</p>

        <div style={{ marginBottom: '10px' }}>
          {recommended ? (
            <div>
              <CheckIcon style={{ fontSize: '15px', paddingRight: '5px' }} />
              <span>I recommend this product</span>
            </div>
          ) : (
            ''
          )}
        </div>

        {response === 'null' || response === null || response === '' ? (
          ''
        ) : (
          <div className='item-response'>
            <div style={{ margin: '10px' }}>
              <span>Response from seller:</span>
            </div>
            <div style={{ margin: '10px' }}>
              <span>{this.state.response}</span>
            </div>
          </div>
        )}

        <div style={{ marginTop: '10px' }}>
          <span>Helpful? Yes ({this.state.helpful}) | Report</span>
        </div>
        <div className='item-border'></div>
      </div>
    );
  }
}
