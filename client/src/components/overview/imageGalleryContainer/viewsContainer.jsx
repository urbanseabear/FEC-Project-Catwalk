import React from 'react';

const ViewsContainer = ({ thumbnailPhotos }) => {
  return (
    <div className='viewsContainer'>
      <div className='arrow' style={{alignItems: 'flex-end'}}>
        <img src='./images/chevron-up.png' style={{maxHeight: '20px'}}/>
      </div>
      <div className='viewsContainerPhotos' >
        {thumbnailPhotos.map((photo, index) => {
          if (index <= 5) {
            return <img src={ photo } style={{ maxWidth: '80px', maxHeight: '80px', margin: '5px 0px 5px 0px', boxShadow: '0px 0px 5px black'}}/>;
          }
        })}
      </div>
      <div className='arrow'>
        <img src='./images/chevron-down.png' style={{maxHeight: '20px'}}/>
      </div>
    </div>
  );
};

export default ViewsContainer;