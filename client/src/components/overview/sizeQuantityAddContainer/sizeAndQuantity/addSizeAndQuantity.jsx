import React from 'react';
import AddQuantity from './addQuantity.jsx';
import AddSize from './addSize.jsx';

const AddSizeAndQuantity = ({ sizeAndQuantity }) => {
  return (
    <div>
      <AddSize sizeAndQuantity={ sizeAndQuantity } />
      <AddQuantity sizeAndQuantity={ sizeAndQuantity } />
    </div>
  );
};

export default AddSizeAndQuantity;