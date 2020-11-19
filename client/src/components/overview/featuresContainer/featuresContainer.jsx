import React from 'react';

const FeaturesContainer = ({ features }) => {
  if (features) {
    return (
      <div className='featuresContainer'>
        <h3 style={{margin: '20px 0px 10px 20px'}}>FEATURES:</h3>
        {features.map(feature => {
          return (
            <li style={{fontSize: '15px', margin: '0px 0px 10px 35px'}}>{feature.feature}: {feature.value}</li>
          );
        })}
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default FeaturesContainer;