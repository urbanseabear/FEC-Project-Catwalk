import React from 'react';
import AddSizeAndQuantity from './sizeAndQuantity/addSizeAndQuantity.jsx';

const SizeQuantityAddContainer = ({ sizeAndQuantity }) => {
  if (sizeAndQuantity.length > 0) {
    return (
      <div className='sizeQuantityAddContainer'>
        <AddSizeAndQuantity sizeAndQuantity={sizeAndQuantity[0]['skus']} />

        <button id='dropButton' className='addToCart'>ADD TO CART <img src='./images/plus.png' style={{height: '16px', margin: '0px 0px 0px 90px'}}/></button>
        <button id='dropButton'><img src='./images/star.png' style={{height: '16px', margin: '0px 0px 0px 0px'}}/></button>
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default SizeQuantityAddContainer;