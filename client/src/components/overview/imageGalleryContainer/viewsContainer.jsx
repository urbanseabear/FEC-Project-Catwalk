import React from 'react';

const ViewsContainer = ({ thumbnailPhotos }) => {
  return (
    <div className='viewsContainer'>
      <div className='arrow' style={{gridRow: '1'}}>
        <img src='./images/chevron-up.png' style={{maxHeight: '100%'}}/>
      </div>
      <div className='viewsContainerPhotos' >
        {thumbnailPhotos.map((photo, index) => {
          if (index <= 7) {
            return <img src={ photo } style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px 0px 5px 0px', boxShadow: '0px 0px 5px black'}}/>;
          }
        })}
      </div>
      <div className='arrow' style={{gridRow: '3'}}>
        <img src='./images/chevron-down.png' style={{maxHeight: '100%'}}/>
      </div>
    </div>
  );
};

export default ViewsContainer;