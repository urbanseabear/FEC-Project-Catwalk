import React from 'react';

const SortBy = () => {
  return (
    <div style={{ display: 'flex', marginTop: '18px' }}>
      <h2>248 reviews, sorted by</h2>
      <select
        style={{
          background: 'none',
          border: 'none',
          outline: 'none',
          fontSize: '24px',
          textDecoration: 'underline',
        }}>
        <option>relevance</option>
        <option>helpful</option>
        <option>newest</option>
      </select>
    </div>
  );
};

export default SortBy;
