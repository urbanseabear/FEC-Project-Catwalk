import React from 'react';
import apiCalls from '../../overviewAPI.mjs';
const onClick = (skuID) => {
  const selectedElement = document.getElementById('dropButton');

  if (selectedElement.childNodes[0].nodeValue === 'SELECT SIZE') {
    selectedElement.childNodes[0].nodeValue = '* PLEASE SELECT SIZE';
    selectedElement.style = 'color: red; font-style: italic; font-size: 12px; width: 195px;';
    selectedElement.focus();
  } else {
    apiCalls.addToCart(skuID);
  }
};

const CartAndFavorite = ({skuID}) => {

  return (
    <div 
      style={{
        display: 'flex', 
        flexDirection: 'row'
      }}
      onClick={() => onClick(skuID)}
    >
      <button 
        id='dropButton' 
        className='addToCart' 
        style={{
          width: '250px'
        }}
      >
        ADD TO CART 
        <img 
          src='/images/plus.png' 
          style={{ 
            height: '16px' 
          }}
        />
      </button>
      <button id='dropButton'><img src='/images/star.png' style={{height: '16px'}}/></button>
    </div>
  );
};

export default CartAndFavorite;