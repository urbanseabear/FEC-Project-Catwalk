import React from 'react';
import CharRating from './CharRating';
import { charRating } from '../utils/helper.js';

const CharRatingList = ({ metaData }) => {
  let features = Object.keys(metaData);

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
        />
      </div>
    );
  });

  return <div>{list}</div>;
};

export default CharRatingList;
