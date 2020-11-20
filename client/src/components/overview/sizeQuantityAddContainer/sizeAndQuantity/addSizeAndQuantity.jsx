import React from 'react';
import AddQuantity from './addQuantity.jsx';
import AddSize from './addSize.jsx';

const AddSizeAndQuantity = ({ selectedSize, selectedQuantity, allSizes, allSizesAndQuantities, onSizeSelect, onQuantitySelect }) => {

  return (
    <div>
      <AddSize 
        selectedSize={ selectedSize } 
        allSizes={ allSizes } 
        onSizeSelect={ onSizeSelect } 
      />
      <AddQuantity 
        selectedQuantity={selectedQuantity}
        totalQuantity=
          {
            selectedSize 
              ? allSizesAndQuantities[Object.keys(allSizes).find(id => allSizes[id] === selectedSize)]['quantity']
              : null
          }
        onQuantitySelect={onQuantitySelect}
      />
    </div>
  );
};

export default AddSizeAndQuantity;