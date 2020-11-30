import React from 'react';
import CharRating from './CharRating';
import { charRating } from '../utils/helper.js';

const CharRatingList = ({ metaData }) => {
  let features = Object.keys(metaData);
  let values = Object.values(metaData);
  let result = [];
  let count = 0;

  // this is mapping over the values in metaData
  // ex: 3.543 is the value
  // I get 3.5 then slice out 3 & .5
  // I multiple 3 and 20 and then .5 and 20
  // I add the result from each and get a number betwen 0-100
  // each bars max width is 100%, and there are 3 bars
  // To span the triangle across all 3, i multiple the value * 3
  // ex: value is 50, so 50 * 3 is 150 then the bar would look like this [-----][---\/---][-----]

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
