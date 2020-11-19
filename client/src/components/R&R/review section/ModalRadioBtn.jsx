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
      <form style={{ display: 'flex', fontSize: '10px' }}>
        <div className='radio'>
          <label>
            <input type='radio' value='option1' checked={true} />
            {one}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option2' />
            {two}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option3' />
            {three}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option3' />
            {four}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='option3' />
            {five}
          </label>
        </div>
      </form>
    </div>
  );
}
