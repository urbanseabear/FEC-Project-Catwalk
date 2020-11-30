import React from 'react';
import ViewsContainer from './viewsContainer';
import MainImage from './mainImage';


class ImageGalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhotoIndex: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.photos !== prevProps.photos) {
      this.setState({
        selectedPhotoIndex: 0
      });
    }
  }

  onThumbnailClick(index) {
    if (index >= 0 && index < this.props.photos.length) {
      this.setState({
        selectedPhotoIndex: index
      });
    }
  }

  render() {
    if (this.props.photos) {
      return (
        <div className='imageGalleryContainer'>
          <ViewsContainer 
            thumbnailPhotos={this.props.photos.reduce((arr, current) => {
              return [...arr, current['thumbnail_url']];
            }, [])}
            selectedPhotoIndex={this.state.selectedPhotoIndex}
            onThumbnailClick={this.onThumbnailClick.bind(this)}
          />
          <div className='leftArrowContainer'>
            {this.state.selectedPhotoIndex === 0 
              ? null 
              : <img src='./images/chevron-left.png' style={{maxWidth: '20px'}} onClick={this.onThumbnailClick.bind(this, this.state.selectedPhotoIndex - 1)} />}
          </div>
          <MainImage photo={this.props.photos[this.state.selectedPhotoIndex]['thumbnail_url']} />
          <div className='rightArrowContainer'>
            {this.state.selectedPhotoIndex === this.props.photos.length - 1 
              ? null 
              : <img src='./images/chevron-right.png' style={{maxWidth: '20px'}} onClick={this.onThumbnailClick.bind(this, this.state.selectedPhotoIndex + 1)} />}
          </div>
        </div>
      );
    } else {
      return (
        null
      );
    }
  }
}

export default ImageGalleryContainer;