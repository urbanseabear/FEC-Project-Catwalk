import React from 'react';
import StarRating from '../../R&R/rating section/StarRating';

const RateCategoryNamePriceContainer = ({ price, category, name }) => {
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
        <div style={{display: 'flex', alignItems: 'flex-end !important'}}>
          <StarRating starNum={3} readOnly={true} />
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
