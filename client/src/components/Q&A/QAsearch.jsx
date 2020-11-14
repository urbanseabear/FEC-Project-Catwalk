import React from 'react';
import '../../styles/main.scss';

const QAsearch = (props) => {
    return (
        <div style={{gridRowStart: '2', gridColumnStart: 'span 4', backgroundColor: 'blue'}}>
            <input style={{ width: '90%', paddingBottom: '10px', paddingTop: '10px', textDecoration: 'bold'}} className='qa-search-bar' type='text' placeholder="Have a question? Search for answers..."></input>
        </div>
    )
}

export default QAsearch;