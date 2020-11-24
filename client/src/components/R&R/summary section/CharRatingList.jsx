import React from 'react';
import CharRating from './CharRating';
import { charRating } from '../utils/helper.js';

const CharRatingList = ({ metaData }) => {
  let features = Object.keys(metaData);
  let values = Object.values(metaData);
  let result = [];
  let count = 0;

  values.map((el) => {
    let first = el.value[0];
    let second = el.value.slice(1, 3);

    let val = parseInt(first) * 20 + parseFloat(second) * 20;

    result.push((val * 3).toString());
  });

  const list = features.map((el) => {
    let titleLabel = el;
    let charObj = charRating(el);

    return (
      <div key={el}>
        <div style={{ paddingTop: '30px' }}></div>
        <CharRating
          labelTitle={titleLabel}
          leftLabel={charObj.L}
          middleLabel={charObj.M}
          rightLabel={charObj.R}
          value={result[count++]}
        />
      </div>
    );
  });

  return <div>{list}</div>;
};

export default CharRatingList;
