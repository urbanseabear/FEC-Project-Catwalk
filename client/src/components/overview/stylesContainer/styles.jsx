import React from 'react';

// CHECKS TO SEE IF A COLOR IS A VALID CSS COLOR
const isCssColor = (color) => {
  let s = new Option().style;
  color = color.replaceAll(' ', '');
  s.color = color;
  return s.color === color;
};

const StylesContainer = ({ selectedStyle, allStyles, changeSelectedStyle }) => {

  if (selectedStyle) {
    return (
      <div className='styleContainer' style={{display: 'grid', gridTemplateRows: '30px 1fr', borderTop: '1px solid darkgrey'}}>
        <p style={{gridRow: '1', fontWeight: 'bold'}}>{'STYLE > '}{ selectedStyle['name'].toUpperCase() }</p>
        <div style={{gridRow: '2', display: 'flex', flexDirection: 'row', margin: '20px 20px', flexWrap: 'wrap', maxWidth: '250px'}}>
          {allStyles.map(({ name, style_id }) => {
            let copyNames = name.toLowerCase().split(' & ');
            copyNames = copyNames.map(color => {
              return isCssColor(color) 
                ? color.replaceAll(' ', '') 
                : isCssColor(color.split(' ')[0])
                  ? color.split(' ')[0]
                  : color.split(' ')[1];
            });
            // IF STYLE IS SINGLE COLOR
            if (copyNames.length === 1) {
              return (
                <div 
                  style={{
                    position: 'relative', 
                    maxHeight: '60px'
                  }} 
                  key={style_id} 
                  onClick={changeSelectedStyle.bind(this, style_id)}
                >
                  <div 
                    style={{
                      position: 'relative',
                      width: '50px', 
                      height: '50px',
                      background: `${copyNames[0]}`,
                      borderRadius: '50%',
                      margin: '5px',
                      boxShadow: '0px 0px 5px black'
                    }}
                  >
                  </div>
                  { selectedStyle['style_id'] === style_id 
                    ? <img
                      src='./images/checkmark.png' 
                      style={{
                        width: '25px', 
                        height: '25px', 
                        position: 'absolute', 
                        top: '0px', 
                        right: '0px',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                      }} 
                    /> 
                    : null 
                  }
                </div>
              );
              // IF STYLE IS TWO COLORS
            } else if (copyNames.length === 2) {
              return (
                <div 
                  style={{
                    position: 'relative', 
                    maxHeight: '60px'
                  }} 
                  key={style_id} 
                  onClick={changeSelectedStyle.bind(this, style_id)}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '50px', 
                      height: '50px',
                      background: `linear-gradient(-45deg, ${copyNames[1]}, ${copyNames[1]} 49%, white 49%, white 51%, ${copyNames[0]} 51%)`,
                      borderRadius: '50%',
                      margin: '5px',
                      boxShadow: '0px 0px 5px black'
                    }}
                  >
                  </div>
                  { selectedStyle['style_id'] === style_id 
                    ? <img 
                      src='./images/checkmark.png' 
                      style={{
                        width: '25px', 
                        height: '25px', 
                        position: 'absolute', 
                        top: '0px', 
                        right: '0px',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                      }} 
                    /> 
                    : null 
                  }
                </div>
              );
            }
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