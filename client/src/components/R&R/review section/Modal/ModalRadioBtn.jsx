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
    <div>
      <h3 style={{ color: '#ffb400' }}>{type}:</h3>
      <form
        id='review-form'
        style={{ display: 'flex', fontSize: '15px', color: 'grey' }}>
        <div className='radio'>
          <label>
            <input type='radio' value='option1' name='char' required />
            {one}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option2' name='char' required />
            {two}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option3' name='char' required />
            {three}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option4' name='char' required />
            {four}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option5' name='char' required />
            {five}
          </label>
        </div>
      </form>
    </div>
  );
}
