import React from 'react';

const MainImage = ({ photo }) => {
  return (
    <div className='mainImageContainer'>
      <img src={photo} style={{ maxWidth: '100%', boxShadow: '0px 0px 10px black' }}/>
    </div>
  );
};

export default MainImage;