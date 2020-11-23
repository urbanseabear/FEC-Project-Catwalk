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
      <h3 style={{ textDecorationLine: 'underline' }}>{type}:</h3>
      <form style={{ display: 'flex', fontSize: '15px' }}>
        <div className='radio'>
          <label>
            <input type='radio' value='option1' name='char' />
            {one}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option2' name='char' />
            {two}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option3' name='char' />
            {three}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option4' name='char' />
            {four}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option5' name='char' />
            {five}
          </label>
        </div>
      </form>
    </div>
  );
}
