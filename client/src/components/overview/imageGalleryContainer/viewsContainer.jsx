import React from 'react';

const ViewsContainer = ({ thumbnailPhotos, midpoint, onClickPrev, onClickNext, onThumbnailClick }) => {

  return (
    <div className='viewsContainer'>
      <div className='arrow' style={{alignItems: 'flex-end'}}>
        <img id='arrows' src='/images/chevron-up.png' style={{backgroundColor: 'white', borderRadius: '50%', padding: '2px', maxWidth: '20px', maxHeight: '20px', cursor: 'pointer'}} onClick={onClickPrev} />
      </div>
      <div className='viewsContainerPhotos' >
        {thumbnailPhotos.map((photo, index) => {
          return index === midpoint
            ? <img id='thumbnail' key={index} src={ photo } style={{ width: '95px', maxHeight: '65px', margin: '5px 0px 5px 0px', boxShadow: '0px 0px 8px blue', cursor: 'pointer'}} onClick={onThumbnailClick.bind(this, index)} />
            : <img id='thumbnail' key={index} src={ photo } style={{ width: '80px', maxHeight: '53px', margin: '5px 0px 5px 0px', boxShadow: '0px 0px 5px black', cursor: 'pointer'}} onClick={onThumbnailClick.bind(this, index)} />;
        })}
      </div>
      <div className='arrow'>
        <img id='arrows' src='/images/chevron-down.png' style={{backgroundColor: 'white', borderRadius: '50%', padding: '2px', maxWidth: '20px', maxHeight: '20px', cursor: 'pointer'}} onClick={onClickNext} />
      </div>
    </div>
  );
};


export default ViewsContainer;