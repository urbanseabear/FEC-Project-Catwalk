import React from 'react';

const RatingBar = ({ starNum }) => {
  return (
    <div style={{ display: 'flex', margin: '0px 0px 15px' }}>
      <p
        style={{
          paddingRight: '10px',
          marginTop: '-4px',
        }}>
        {starNum}__stars
      </p>
      <div
        style={{
          position: 'relative',
          height: '10px',
          width: '100%',
          borderRadius: '1px',
          border: '1px solid#EEEEEE',
          background: '#EEEEEE',
          borderStyle: 'none',
        }}>
        <div
          style={{
            width: '20%',
            background: '#222',
            height: '100%',
            borderRadius: 'inherit',
            transition: 'width .2s ease-in',
          }}></div>
      </div>
    </div>
  );
};

export default RatingBar;
