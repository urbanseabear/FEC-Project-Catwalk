import React from 'react';
import RadioBtn from './ModalRadioBtn';
import { Modal } from '../../utils/helper.js';

const ModalList = ({ metaData }) => {
  // grabs the characteristic names from metaData
  let features = Object.keys(metaData);

  const list = features.map((el) => {
    let titleLabel = el;
    // see Modal in helper.js
    let charObj = Modal(el);

    return (
      <div key={el} style={{ marginTop: '30px' }}>
        <RadioBtn
          type={titleLabel}
          one={charObj.one}
          two={charObj.two}
          three={charObj.three}
          four={charObj.four}
          five={charObj.five}
        />
      </div>
    );
  });

  return <div>{list}</div>;
};

export default ModalList;
