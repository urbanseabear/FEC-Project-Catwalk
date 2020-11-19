import React from 'react';

const AddSize = ({ sizeAndQuantity }) => {
  return (
    <div className='dropDown'>
      <button 
        id='dropButton' 
      >
          SELECT SIZE 
        <img 
          src='./images/chevron-down.png' 
          style={{height: '12px', margin: '0px 0px 0px 50px'}}/>
      </button>
      <div className='dropDownContent'>
        {Object.values(sizeAndQuantity).map(sizeQuantity => {
          return (
            <a>SIZE: { sizeQuantity['size'] }</a>
          );
        })}
      </div>
    </div>
  );
};

export default AddSize;