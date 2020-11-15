import React from 'react';

const RatingBar = ({ starNum }) => {
  return (
    <div>
      <p style={{ paddingRight: '10px' }}>{starNum} stars</p>
      <div
        style={{
          position: 'relative',
          height: '10px',
          width: '100%',
          borderRadius: '1px',
          border: '1px solid#333',
        }}>
        <div
          style={{
            width: '20%',
            background: '#1DA598',
            height: '100%',
            borderRadius: 'inherit',
            transition: 'width .2s ease-in',
          }}></div>
      </div>
    </div>
  );
};

export default RatingBar;
