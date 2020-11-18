import React from 'react';

const RateCategoryNamePriceContainer = ({ price, category, name }) => {
  if (category !== undefined) {
    return (
      <div className='ratingCategoryProductNamePriceContainer' style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <a>Rating</a><br />
        <a style={{ font: 'inherit' }}>{ category.toUpperCase() }</a>
        <a style={{fontSize: '2em'}}>{ name }</a>
        <a>${ price }</a>
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default RateCategoryNamePriceContainer;