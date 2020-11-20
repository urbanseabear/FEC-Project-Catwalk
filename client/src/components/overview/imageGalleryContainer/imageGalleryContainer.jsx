import React from 'react';
import ViewsContainer from './viewsContainer';
import MainImage from './mainImage';

const ImageGalleryContainer = ({ photos }) => {
  // console.log(photos);
  if (photos) {
    return (
      <div className='imageGalleryContainer'>
        <ViewsContainer thumbnailPhotos={photos.reduce((arr, current) => {
          return [...arr, current['thumbnail_url']];
        }, [])}/>
        <div className='leftArrowContainer'>
          <img src='./images/chevron-left.png' style={{maxWidth: '20px'}}/>
        </div>
        <MainImage photo={photos[0]['url']} />
        <div className='rightArrowContainer'>
          <img src='./images/chevron-right.png' style={{maxWidth: '20px'}}/>
        </div>
      </div>
    );
  } else {
    return (
      null
    );
  }
};

// class ImageGalleryContainer extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return(
//       null
//     );
//   }
// }

export default ImageGalleryContainer;