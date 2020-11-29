import React from 'react';

export default function CustomizedRadios({
  type,
  one,
  two,
  three,
  four,
  five,
}) {
  return (
    <div className='review-form'>
      <h3 style={{ color: '#ffb400' }}>{type}:</h3>
      <div style={{ display: 'flex', fontSize: '15px', color: 'grey' }}>
        <div>
          <label>
            <input type='radio' value='option1' name='char' required />
            {one}
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='option2' name='char' />
            {two}
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='option3' name='char' />
            {three}
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='option4' name='char' />
            {four}
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='option5' name='char' />
            {five}
          </label>
        </div>
      </div>
    </div>
  );
}
