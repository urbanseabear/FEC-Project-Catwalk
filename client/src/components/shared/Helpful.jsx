import React from 'react';

const Helpful = (props) => {
    var reportOrAdd = '';
    if (props.sideText === 'report') {
      reportOrAdd = 'Report';
    }
    return (
        <span>
            Helpful?
            <span style={{textDecoration: 'underline'}}>Yes</span>
            <span>(0) | </span>
    <span>{reportOrAdd}</span>
        </span>
    )
}

export default Helpful;