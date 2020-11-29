import React from 'react';
import CartAndFavorite from './cartAndFavorite/cartAndFavorite.jsx';
import AddSizeAndQuantity from './sizeAndQuantity/addSizeAndQuantity.jsx';

const SizeQuantityAddContainer = ({ selectedSize, selectedQuantity, allSizesAndQuantities, onSizeSelect, onQuantitySelect }) => {
  if (Object.keys(allSizesAndQuantities).length > 0) {
    return (
      <div className='sizeQuantityAddContainer'>
        <AddSizeAndQuantity 
          selectedSize={selectedSize}
          selectedQuantity={selectedQuantity}
          allSizesAndQuantities={allSizesAndQuantities} 
          allSizes={ Object.keys(allSizesAndQuantities).reduce((object, element) => {
            if (allSizesAndQuantities[element]['quantity'] > 0) {
              object[element] = allSizesAndQuantities[element]['size'];
            }
            return object;
          }, {})} 
          onSizeSelect={onSizeSelect}
          onQuantitySelect={onQuantitySelect}
        />
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