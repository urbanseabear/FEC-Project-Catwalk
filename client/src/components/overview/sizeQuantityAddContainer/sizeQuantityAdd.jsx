import React from 'react';
import CartAndFavorite from './cartAndFavorite/cartAndFavorite.jsx';
import AddSizeAndQuantity from './sizeAndQuantity/addSizeAndQuantity.jsx';

// const SizeQuantityAddContainer = ({ sizeAndQuantity }) => {
//   if (Object.keys(sizeAndQuantity).length > 0) {
//     return (
//       <div className='sizeQuantityAddContainer'>
//         <AddSizeAndQuantity 
//           sizeAndQuantity={sizeAndQuantity['skus']} 
//           allSizes={ Object.keys(sizeAndQuantity['skus']).reduce((object, element) => {
//             if (sizeAndQuantity['skus'][element]['quantity'] > 0) {
//               object[element] = sizeAndQuantity['skus'][element]['size'];
//             }
//             return object;
//           }, {})} 
//         />
//         <CartAndFavorite />
//       </div>
//     );
//   } else {
//     return (
//       null
//     );
//   }
// };

const SizeQuantityAddContainer = ({ selectedSize, selectedQuantity, allSizesAndQuantities, onSizeSelect, onQuantitySelect }) => {
  //console.log('ALL SIZES AND QUANTITIES: ', allSizesAndQuantities);
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