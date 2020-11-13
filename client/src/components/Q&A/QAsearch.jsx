import React from 'react';
import '../../styles/main.scss';

const QAsearch = (props) => {
    return (
        <div style={{gridRowStart: '2', gridColumnStart: 'span 4', backgroundColor: 'blue'}}>
            <input style={{ width: '90%'}} className='qa-search-bar' type='text' placeholder="Have a question? Search for answers..."></input>
        </div>
    )
}

export default QAsearch;