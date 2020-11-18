import React from 'react';

const StylesContainer = ({ styles }) => {
  if (styles.length > 0) {
    return (
      <div className='styleContainer' style={{display: 'grid', gridTemplateRows: '30px 1fr'}}>
        {/* HARD CODED THIS... FIX LATER */}
        <p style={{gridRow: '1', fontWeight: 'bold'}}>{'STYLE > '}{styles[0]['name'].toUpperCase()}</p>
        <div style={{gridRow: '2', display: 'flex', flexDirection: 'row', margin: '20px 20px' }}>
          {styles.map(({ name }) => {
            name = name.toLowerCase().trim().split(' & ');
            return (
              <div style={{
                width: '60px', 
                height: '60px',
                background: `linear-gradient(-45deg, ${name[0]}, ${name[0]} 49%, white 49%, white 51%, ${name[1]} 51%)`,
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