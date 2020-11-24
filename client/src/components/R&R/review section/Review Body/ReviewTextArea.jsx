import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const ReviewTextArea = () => {
  return (
    <div>
      <h2>Write Your Review</h2>
      <span>About the 'product name'</span>
      <div style={{ marginTop: '20px' }}>
        <div>
          <div>Review Title:</div>
          <TextareaAutosize
            minLength='1'
            maxLength='60'
            placeholder='Example: "Best purchase ever!”'
            style={{
              width: '500px',
              height: '30px',
              outline: 'none',
              fontFamily: 'inherit',
              fontSize: '15px',
              border: 'solid #eeeeee',
              borderWidth: 'thin',
              marginTop: '10px',
            }}
          />
        </div>
        <div>
          <div>Review Body</div>
          <TextareaAutosize
            minLength='50'
            maxLength='1000'
            placeholder='Why did you like the product or not?'
            style={{
              width: '500px',
              height: '200px',
              outline: 'none',
              fontFamily: 'inherit',
              fontSize: '15px',
              border: 'solid #eeeeee',
              borderWidth: 'thin',
              marginTop: '10px',
            }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <div>Nickname:</div>
          <TextareaAutosize
            minLength='1'
            maxLength='60'
            placeholder='Example: "jackson11!”'
            style={{
              width: '500px',
              height: '30px',
              outline: 'none',
              fontFamily: 'inherit',
              fontSize: '15px',
              border: 'solid #eeeeee',
              borderWidth: 'thin',
              marginTop: '10px',
            }}
          />
          <div style={{ fontSize: '10px', fontStyle: 'italic' }}>
            For privacy reasons, do not use your full name or email address
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <div>Email:</div>
          <TextareaAutosize
            minLength='1'
            maxLength='60'
            placeholder='Example: "jackson11@email.com”'
            style={{
              width: '500px',
              height: '30px',
              outline: 'none',
              fontFamily: 'inherit',
              fontSize: '15px',
              border: 'solid #eeeeee',
              borderWidth: 'thin',
              marginTop: '10px',
            }}
          />
          <div style={{ fontSize: '10px', fontStyle: 'italic' }}>
            For authentication reasons, you will not be emailed
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTextArea;
