import React from 'react';
import CartAndFavorite from './cartAndFavorite/cartAndFavorite.jsx';
import AddSizeAndQuantity from './sizeAndQuantity/addSizeAndQuantity.jsx';

const SizeQuantityAddContainer = ({ sizeAndQuantity }) => {
  if (sizeAndQuantity.length > 0) {
    return (
      <div className='sizeQuantityAddContainer'>
        <AddSizeAndQuantity sizeAndQuantity={sizeAndQuantity[0]['skus']} />
        <CartAndFavorite />
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default SizeQuantityAddContainer;