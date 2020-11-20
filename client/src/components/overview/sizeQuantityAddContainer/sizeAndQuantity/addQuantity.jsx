import React from 'react';

const AddQuantity = ({ selectedQuantity, totalQuantity, onQuantitySelect }) => {
  return (
    <div className='dropDown'>
      <button 
        id='dropButton'
        style={{width: '100px'}}>
        { !selectedQuantity ? '-' : selectedQuantity}
        <img 
          src='./images/chevron-down.png' 
          style={{height: '12px'}} />
      </button>
      <div className='dropDownContent' style={{width: '100px'}}>
        { 
          totalQuantity === null
            ? null
            : totalQuantity < 15 
              ? [...Array(totalQuantity).keys()].map(numb => {
                return <a key={numb + 1} onClick={onQuantitySelect.bind(this, numb + 1)}>{numb + 1}</a>;
              })
              : [...Array(15).keys()].map(numb => {
                return <a key={numb + 1} onClick={onQuantitySelect.bind(this, numb + 1)}>{numb + 1}</a>;
              })
        }
      </div>
    </div>
  );

};

export default AddQuantity;