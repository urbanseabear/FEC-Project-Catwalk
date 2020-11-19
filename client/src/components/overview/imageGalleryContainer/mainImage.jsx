import React from 'react';

const MainImage = ({ photo }) => {
  return (
    <div className='mainImageContainer' style={{backgroundImage: `url(${ photo })`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      {/* <div style={{backgroundImage: `url(${ photo })`, backgroundSize: 'cover'}}></div> */}
      {/* <img src={photo} style={{ maxHeight: 'fit-content', maxWidth: '100%', boxShadow: '0px 0px 10px black' }}/> */}
    </div>
  );
};

export default MainImage;