import React from 'react';

const Helpful = (props) => {
    var reportOrAdd = '';
    if (props.sideText === 'report') {
      reportOrAdd = 'Report';
    }
    return (
        <span style={{marginLeft: '100px'}}>
            Helpful?
            <span style={{textDecoration: 'underline'}}>Yes</span>
            <span>(0) | </span>
    <span style={{textDecoration: 'underline'}}>{reportOrAdd}</span>
        </span>
    )
}

export default Helpful;