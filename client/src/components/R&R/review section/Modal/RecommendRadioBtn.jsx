import React, { useState } from 'react';

const RecommendRadioBtn = () => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  const checked = (e) => {
    e === 'yes' ? setYes(!yes) : setNo(!no);
  };
  return (
    <div>
      <h3 style={{ color: '#eeeeee' }}>Would you recommend this product?</h3>
      <div id='review-form' style={{ color: 'grey' }}>
        <div className='radio'>
          <label>
            <input
              onChange={(e) => checked(e.target.value)}
              type='radio'
              required
              value='yes'
              name='recommended'
              checked={yes}
            />
            Yes
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              onChange={(e) => checked(e.target.value)}
              required
              type='radio'
              value='no'
              name='recommended'
              checked={no}
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default RecommendRadioBtn;
