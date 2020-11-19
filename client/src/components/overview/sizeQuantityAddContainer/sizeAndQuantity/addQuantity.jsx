import React from 'react';

const AddQuantity = ({ sizeAndQuantity }) => {
  return (
    <div className='dropDown'>
      <button 
        id='dropButton'>
          1 
        <img 
          src='./images/chevron-down.png' 
          style={{height: '12px', margin: '0px 0px 0px 50px'}} />
      </button>
      <div className='dropDownContent' style={{width: '101px'}}>
        {Object.values(sizeAndQuantity).map(sizeQuantity => {
          return (
            <a>SIZE: { sizeQuantity['quantity'] }</a>
          );
        })}
      </div>
    </div>
  );
};

export default AddQuantity;