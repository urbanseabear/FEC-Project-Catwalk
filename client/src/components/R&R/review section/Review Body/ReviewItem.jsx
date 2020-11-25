import React, { useState } from 'react';
import StarRating from '../../rating section/StarRating';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckIcon from '@material-ui/icons/Check';
import { maxCharLength } from '../../utils/helper.js';
import Photos from '../../../Q&A/QAphotos';
import Helpful from '../../../shared/Helpful';
import Button from '@material-ui/core/Button';
import '../../../../styles/R&R/ReviewItem.scss';
const moment = require('moment');

const ReviewItem = ({ data }) => {
  const {
    review_id,
    body,
    date,
    helpfulness,
    rating,
    recommend,
    response,
    reviewer_name,
    summary,
    email,
  } = data;

  const [showMore, setShowMore] = useState(false);

  const photo = data.photos.map((el) => {
    return (
      <div className='review-photo'>
        <Photos key={1} photo={el.url} />
      </div>
    );
  });

  let moreThan250 = () => {
    return (
      <div>
        <p className='item-body'>{body.slice(0, 250)}...</p>
        <Button variant='contained' onClick={() => setShowMore(true)}>
          Show more
        </Button>
      </div>
    );
  };

  let lessThan250 = () => {
    return (
      <div>
        <p className='item-body'>{body}</p>
      </div>
    );
  };

  const recommended = recommend !== 0;

  return (
    <div className='item-wrapper'>
      <span className='user-date'>
        {email ? (
          <CheckCircleIcon style={{ fontSize: '13px', paddingRight: '4px' }} />
        ) : (
          ''
        )}
        {reviewer_name} | {moment(date).format('MMMM Do YYYY')}
      </span>

      <StarRating starNum={rating} readOnly={true} precision={0.25} />

      <h1 className='review-summary'>{maxCharLength(summary, 60)}</h1>

      {body.length > 250
        ? showMore
          ? lessThan250()
          : moreThan250()
        : lessThan250()}

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
            <span style={{ fontSize: '17px' }}>Response from seller:</span>
          </div>
          <div style={{ margin: '10px' }}>
            <span style={{ fontSize: '15px' }}>{response}</span>
          </div>
        </div>
      )}

      <div style={{ marginTop: '10px' }}>
        <Helpful a_id={review_id} helped={helpfulness} reportOrAdd='Report' />
      </div>
      <div className='item-border'></div>
    </div>
  );
};

export default ReviewItem;
