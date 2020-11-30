import React from 'react';

const MainImage = ({ photo, changeClassName }) => {

  return (
    <div 
      onClick={changeClassName}
      className='mainImageContainer' 
      style={{
        backgroundImage: `url(${ photo })`, 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        cursor: '-webkit-zoom-in' 
      }}
    >
    </div>
  );
};

export default MainImage;