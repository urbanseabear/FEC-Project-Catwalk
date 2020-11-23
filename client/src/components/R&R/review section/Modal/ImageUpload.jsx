import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ImageUploading from 'react-images-uploading';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className='image-upload-wrapper'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove }) => (
          <div className='upload__image-wrapper'>
            <Button variant='contained' onClick={onImageUpload}>
              Upload Photo
            </Button>
            &nbsp;
            <Button variant='contained' onClick={onImageRemoveAll}>
              Remove all images
            </Button>
            <div
              style={{
                display: 'flex',
                marginTop: '12px',
                flex: '0 0 350px',
              }}>
              {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <div>
                    <Badge
                      color='secondary'
                      badgeContent={
                        <span onClick={() => onImageRemove(index)}>x</span>
                      }
                      style={{ cursor: 'pointer', marginRight: '12px' }}>
                      {
                        <img
                          src={image['data_url']}
                          alt=''
                          width='75'
                          height='75'
                        />
                      }
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
