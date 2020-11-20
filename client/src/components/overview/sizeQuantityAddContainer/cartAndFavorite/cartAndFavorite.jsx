import React from 'react';

const CartAndFavorite = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <button id='dropButton' className='addToCart'>ADD TO CART <img src='./images/plus.png' style={{height: '16px', margin: '0px 0px 0px 90px'}}/></button>
      <button id='dropButton'><img src='./images/star.png' style={{height: '16px'}}/></button>
    </div>
  );
};

export default CartAndFavorite;