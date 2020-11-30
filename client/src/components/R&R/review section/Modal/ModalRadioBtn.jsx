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
    <div id='review-form'>
      <h3 style={{ color: '#ffb400' }}>{type}:</h3>
      <div style={{ display: 'flex', fontSize: '15px', color: 'grey' }}>
        <div id={type}>
          <label>
            <input type='radio' value='option1' name='char' required />
            {one}
          </label>
        </div>
        <div id={type}>
          <label>
            <input type='radio' value='option2' name='char2' />
            {two}
          </label>
        </div>
        <div id={type}>
          <label>
            <input type='radio' value='option3' name='char3' />
            {three}
          </label>
        </div>
        <div id={type}>
          <label>
            <input type='radio' value='option4' name='char4' />
            {four}
          </label>
        </div>
        <div id={type}>
          <label>
            <input type='radio' value='option5' name='char5' />
            {five}
          </label>
        </div>
      </div>
    </div>
  );
}
