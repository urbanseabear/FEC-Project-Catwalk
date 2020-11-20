import React from 'react';

const AddSize = ({ selectedSize, allSizes, onSizeSelect }) => {
  return (
    <div className='dropDown'>
      <button 
        id='dropButton'
        style={{width: '195px'}}
      >
        { selectedSize ? `SIZE: ${selectedSize}` : 'SELECT SIZE' } 
        <img 
          src='./images/chevron-down.png' 
          style={{height: '12px'}}/>
      </button>
      <div className='dropDownContent'>
        {Object.keys(allSizes).map(sizeId => {
          return (
            <a key={ sizeId } onClick={ onSizeSelect.bind(this, sizeId) }>SIZE: { allSizes[sizeId] }</a>
          );
        })}
      </div>
    </div>
  );
};

export default AddSize;