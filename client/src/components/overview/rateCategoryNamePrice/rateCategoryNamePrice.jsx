import React from 'react';

const RateCategoryNamePriceContainer = ({ price, category, name }) => {
  if (category !== undefined) {
    return (
      <div className='ratingCategoryProductNamePriceContainer' style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', padding: '0px 0px 90px 0px'}}>
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