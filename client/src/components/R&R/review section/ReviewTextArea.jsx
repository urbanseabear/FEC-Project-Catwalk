import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const ReviewTextArea = (props) => {
  return (
    <div>
      <h2>Write Your Review</h2>
      <span>About the 'product name'</span>
      <div style={{ marginTop: '20px' }}>
        <TextareaAutosize
          minLength='1'
          maxLength='60'
          placeholder='“Example: Best purchase ever!”'
          style={{
            width: '500px',
            height: '40px',
            outline: 'none',
            fontFamily: 'inherit',
            fontSize: '15px',
            border: 'solid #eeeeee',
            borderWidth: 'thin',
          }}
        />
        <TextareaAutosize
          minLength='50'
          maxLength='1000'
          placeholder='“Why did you like the product or not?”'
          style={{
            width: '500px',
            height: '455px',
            outline: 'none',
            fontFamily: 'inherit',
            fontSize: '15px',
            border: 'solid #eeeeee',
            borderWidth: 'thin',
          }}
        />
      </div>
    </div>
  );
};

export default ReviewTextArea;
