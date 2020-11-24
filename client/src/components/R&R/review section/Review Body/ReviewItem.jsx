import React from 'react';
import StarRating from '../../rating section/StarRating';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckIcon from '@material-ui/icons/Check';
import { maxCharLength } from '../../utils/helper.js';
import '../../../../styles/R&R/ReviewItem.scss';
const moment = require('moment');
import Photos from '../../../Q&A/QAphotos';

const ReviewItem = ({ data }) => {
  const {
    body,
    date,
    helpfulness,
    rating,
    recommend,
    response,
    reviewer_name,
    summary,
  } = data;

  const photo = data.photos.map((el) => {
    return (
      <div className='review-photo'>
        <Photos key={data.review_id} photo={el.url} />
      </div>
    );
  });

  const recommended = recommend !== 0;

  return (
    <div className='item-wrapper'>
      <span className='user-date'>
        <CheckCircleIcon style={{ fontSize: '13px', paddingRight: '4px' }} />
        {reviewer_name} | {moment(date).format('MMMM Do YYYY')}
      </span>

      <StarRating starNum={rating} readOnly={true} precision={0.25} />

      <h1 className='review-summary'>{maxCharLength(summary, 60)}</h1>

      <p className='item-body'>{body}</p>

      {photo ? photo : ''}

      <div className='recommend'>
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
            <span>{response}</span>
          </div>
        </div>
      )}

      <div style={{ marginTop: '10px' }}>
        <span>Helpful? Yes ({helpfulness}) | Report</span>
      </div>
      <div className='item-border'></div>
    </div>
  );
};

export default ReviewItem;
