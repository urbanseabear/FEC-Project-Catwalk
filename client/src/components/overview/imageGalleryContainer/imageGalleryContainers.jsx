import React from 'react';
import ViewsContainer from './viewsContainer';
import MainImage from './mainImage';
import PhotosLinkedList from './photos';

class ImageGalleryContainers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thumbnails: null,
      midpoint: null,
      expandedView: false,
    };
    this.imageRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.photos !== prevProps.photos) {
      const linkedListPhotos = new PhotosLinkedList();
      this.props.photos.forEach((photo) => linkedListPhotos.addNode(photo));
      linkedListPhotos.newThumbnails();

      this.setState({
        thumbnails: linkedListPhotos,
        midpoint:
          linkedListPhotos.thumbnails.length % 2 === 1
            ? Math.floor(linkedListPhotos.thumbnails.length / 2)
            : linkedListPhotos.thumbnails.length / 2 - 1,
      });
    }
  }

  onClickPrev() {
    this.setState({
      thumbnails: this.state.thumbnails.prev(),
    });
  }

  onClickNext() {
    this.setState({
      thumbnails: this.state.thumbnails.next(),
    });
  }

  onExpandedViewClick() {
    this.setState({
      expandedView: !this.state.expandedView,
    });
  }

  onThumbnailClick(index) {
    if (this.state.midpoint !== index) {
      let difference = index - this.state.midpoint;
      if (difference > 0) {
        while (difference > 0) {
          this.state.thumbnails.next();
          difference--;
        }
      } else if (difference < 0) {
        while (difference < 0) {
          this.state.thumbnails.prev();
          difference++;
        }
      }
      this.setState({
        thumbnails: this.state.thumbnails,
      });
    }
  }

  render() {
    if (this.state.thumbnails) {
      return (
        <div
          ref={this.imageRef}
          className='imageGalleryContainers'
          style={{
            backgroundImage: `url(${
              this.state.thumbnails.thumbnails[this.state.midpoint].value['url']
            })`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            cursor: '-webkit-zoom-in',
          }}
          onClick={(e) => {
            if (e.target.id !== 'arrows') {
              if (!this.state.expandedView) {
                this.onExpandedViewClick.bind(this, e)();
                setTimeout(
                  () => (this.imageRef.current.style.gridColumn = '1/3'),
                  500
                );
                this.imageRef.current.style.width = `${this.props.window.width}px`;
                this.imageRef.current.style.zIndex = '1000';
                this.imageRef.current.style.transition = 'ease-out .5s';
              } else if (this.state.expandedView) {
                this.onExpandedViewClick.bind(this, e)();
                setTimeout(() => {
                  this.imageRef.current.style.gridColumn = '1';
                  this.imageRef.current.style.width = '100%';
                }, 500);
                this.imageRef.current.style.width = `${
                  this.props.window.width * 0.6
                }px`;
                this.imageRef.current.style.backgroundSize = 'contain';
                this.imageRef.current.style.backgroundPosition = 'center';
                this.imageRef.current.style.zIndex = '0';
                this.imageRef.current.style.transition = 'ease-in .5s';
              }
            }
          }}>
          <ViewsContainer
            thumbnailPhotos={this.state.thumbnails.thumbnails.map(
              ({ value }) => value['thumbnail_url']
            )}
            // thumbnailPhotos={!this.state.expandedView ? this.state.thumbnails.thumbnails.map(({ value })=> value['thumbnail_url']) : this.props.photos.map(({url}) => url)}
            midpoint={this.state.midpoint}
            onClickPrev={this.onClickPrev.bind(this)}
            onClickNext={this.onClickNext.bind(this)}
            onThumbnailClick={this.onThumbnailClick.bind(this)}
          />
          <div
            style={{
              gridColumn: '2',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <div className='leftArrowContainer'>
              <img
                id='arrows'
                src='./images/chevron-left.png'
                style={{
                  maxWidth: '100%',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  padding: '2px',
                  maxWidth: '20px',
                  maxHeight: '20px',
                  cursor: 'pointer',
                }}
                onClick={this.onClickPrev.bind(this)}
              />
            </div>
            {/* <MainImage 
              photo={this.state.thumbnails.thumbnails[this.state.midpoint].value['thumbnail_url']} 
              //changeClassName={this.changeClassName.bind(this)} 
            /> */}
            <div className='rightArrowContainer'>
              <img
                id='arrows'
                src='./images/chevron-right.png'
                style={{
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  padding: '2px',
                  maxWidth: '20px',
                  maxHeight: '20px',
                  cursor: 'pointer',
                }}
                onClick={this.onClickNext.bind(this)}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ImageGalleryContainers;
