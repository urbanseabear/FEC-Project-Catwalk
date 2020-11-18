import React from 'react';

const MainImage = ({ photo }) => {
  return (
    <div className='mainImageContainer'>
      <img src={photo} style={{ maxWidth: '100%' }}/>
    </div>
  );
};

export default MainImage;