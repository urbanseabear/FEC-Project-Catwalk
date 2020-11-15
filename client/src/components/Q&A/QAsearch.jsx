import React from 'react';
import '../../styles/main.scss';

const QAsearch = (props) => {
    return (
        <div style={{gridRowStart: '2', gridColumnStart: 'span 4', backgroundColor: 'blue'}}>
            <input style={{ width: '98%', paddingBottom: '10px', paddingTop: '10px', fontWeight: 'bold', fontSize: '20px'}} className='qa-search-bar' type='text' placeholder="Have a question? Search for answers..."></input>
        </div>
    )
}

export default QAsearch;