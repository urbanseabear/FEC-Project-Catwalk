import React from 'react';

const StylesContainer = ({ selectedStyle, allStyles, changeSelectedStyle }) => {
  if (selectedStyle) {
    return (
      <div className='styleContainer' style={{display: 'grid', gridTemplateRows: '30px 1fr', borderTop: '1px solid darkgrey'}}>
        <p style={{gridRow: '1', fontWeight: 'bold'}}>{'STYLE > '}{ selectedStyle['name'].toUpperCase() }</p>
        <div style={{gridRow: '2', display: 'flex', flexDirection: 'row', margin: '20px 20px', flexWrap: 'wrap', maxWidth: '250px'}}>
          {allStyles.map(({ name, style_id }) => {
            var copyName = name.slice().toLowerCase().replaceAll(' ', '').split('&');
            return (
              <div 
                key={style_id}
                onClick={changeSelectedStyle.bind(this, style_id)}
                style={{
                  width: '50px', 
                  height: '50px',
                  background: `linear-gradient(-45deg, ${copyName[0]}, ${copyName[0]} 49%, white 49%, white 51%, ${copyName[1]} 51%)`,
                  borderRadius: '50%',
                  margin: '5px',
                  boxShadow: '0px 0px 5px black'
                }}
              ></div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default StylesContainer;