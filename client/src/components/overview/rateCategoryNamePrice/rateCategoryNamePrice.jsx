import React from 'react';
import StarRating from '../../R&R/rating section/StarRating';

const RateCategoryNamePriceContainer = ({ price, category, name, reviewData }) => {
  if (category !== undefined) {
    return (
      <div
        className='ratingCategoryProductNamePriceContainer'
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          padding: '0px 0px 50px 0px',
        }}>
        <div style={{marginTop: '100px !important'}}>
          <StarRating starNum={reviewData.reduce((total, {rating}) => total + rating, 0) / reviewData.length } precision={0.25} readOnly={true} />
          <a href='#reviewRatings'>Read all {reviewData.length} reviews</a>
        </div>
        <a style={{ font: 'inherit' }}>{category.toUpperCase()}</a>
        <a style={{ fontSize: '2em' }}>{name}</a>
        {Array.isArray(price) === true ? (
          <div>
            <a style={{ color: 'red' }}>${price[0]}</a>
            <a style={{ textDecoration: 'line-through' }}> ${price[1]}</a>
          </div>
        ) : (
          <a>${price}</a>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default RateCategoryNamePriceContainer;
