import React from 'react';
import StarRating from './StarRating.jsx';

const ReviewItem = () => {
  return (
    <div style={{ paddingTop: '14px' }}>
      <span style={{ float: 'right', marginTop: '24px' }}>
        User | November 21, 2020
      </span>
      <StarRating />
      <h1>Review title with word-break truncation to prevent wrapping</h1>
      <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        This is some sample review body text. This is some sample review body
        text. This is some sample review body text. This is some sample review
        body text.
      </p>
      <div>
        <span>√ I recommend this product</span>
      </div>
      <div
        style={{
          border: 'solid',
          borderColor: 'grey',
          height: '70px',
          margin: '40px 0px',
          background: 'grey',
        }}>
        <div style={{ margin: '10px' }}>
          <span> Response:</span>
        </div>
        <div style={{ margin: '10px' }}>
          <span>
            Marizpan danish jelly beans gummi beats apple pie cheesecake topping
            biscuit sesame snaps.
          </span>
        </div>
      </div>
      <div>
        <span>Helpful? Yes (0) | Report</span>
      </div>
      <div
        style={{
          paddingTop: '30px',
          borderBottom: 'solid',
          borderStyle: 'thin',
          borderBottomColor: 'lightGrey',
        }}></div>
    </div>
  );
};

export default ReviewItem;
