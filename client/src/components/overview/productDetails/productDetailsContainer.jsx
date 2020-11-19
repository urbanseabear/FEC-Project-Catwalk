import React from 'react';

const ProductDetailsContainer = ({slogan, description }) => {
  return (
    <div className='productDetailsContainer'>
      <h2 className='slogan'>{ slogan }</h2>
      <a>{description}</a>
    </div>
  );
};

export default ProductDetailsContainer;