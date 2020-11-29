import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import '../../../../styles/R&R/ReviewTextArea.scss';

// this is the text areas for the modal review submission

const ReviewTextArea = ({ productName }) => {
  return (
    <div style={{ color: '#eeeeee' }}>
      <div>
        <h2>Write Your Review</h2>
        <span style={{ color: 'grey' }}>
          About the <span style={{ color: '#ffb400' }}>{productName}</span>
        </span>
      </div>
      <div id='review-form' style={{ color: 'grey' }}>
        <div style={{ marginTop: '20px' }}>
          <div>
            <div>Review Title:</div>
            <TextField
              id='standard-basic'
              type='string'
              minLength='1'
              maxLength='60'
              required
              placeholder='Example: "Best purchase ever!”'
              style={{
                width: '500px',
                marginTop: '5px',
                backgroundColor: 'white',
                borderRadius: '3px',
              }}
            />
          </div>
          <div>
            <div>Review Body</div>
            <TextareaAutosize
              className='text-area'
              minLength='50'
              maxLength='1000'
              required
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
                borderRadius: '3px',
              }}
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <div>Nickname:</div>
            <TextField
              id='standard-basic'
              minLength='1'
              type='string'
              required
              maxLength='60'
              placeholder='Example: "jackson11!”'
              style={{
                width: '500px',
                marginTop: '10px',
                backgroundColor: 'white',
                borderRadius: '3px',
              }}
            />
            <div style={{ fontSize: '10px', color: 'grey' }}>
              (For privacy reasons, do not use your full name or email address)
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div>Email:</div>
            <TextField
              id='standard-basic'
              minLength='1'
              type='email'
              required
              maxLength='60'
              placeholder='Example: "jackson11@email.com”'
              style={{
                width: '500px',
                marginTop: '10px',
                backgroundColor: 'white',
                borderRadius: '3px',
              }}
            />
            <div style={{ fontSize: '10px', color: 'grey' }}>
              (For authentication reasons, you will not be emailed)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTextArea;
