import React from 'react';

const onClick = () => {
  const selectedElement = document.getElementById('dropButton');

  if (selectedElement.childNodes[0].nodeValue === 'SELECT SIZE') {
    selectedElement.childNodes[0].nodeValue = '* PLEASE SELECT SIZE';
    selectedElement.style = 'color: red; font-style: italic; font-size: 12px; width: 195px;';
    selectedElement.focus();
  }
};

const CartAndFavorite = () => {

  return (
    <div 
      style={{
        display: 'flex', 
        flexDirection: 'row'
      }}
      onClick={onClick}
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
          src='./images/plus.png' 
          style={{ 
            height: '16px' 
          }}
        />
      </button>
      <button id='dropButton'><img src='./images/star.png' style={{height: '16px'}}/></button>
    </div>
  );
};

export default CartAndFavorite;