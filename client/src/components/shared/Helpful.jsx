import React from 'react';

const Helpful = (props) => {
<<<<<<< HEAD
    
    // onClick={!clickRorA ? props.onReportOrAdd : null}
    //onClick={!clickH ? props.onHelpful : null}
    return (
        <span >
            Helpful?
            <span style={{textDecoration: 'underline'}} >Yes</span>
            <span>({props.helped ? props.helped : 0}) | </span>
    <span style={{textDecoration: 'underline'}}>{props.reportOrAdd}</span>
        </span>
    )
}
=======
  var reportOrAdd = '';
  if (props.sideText === 'report') {
    reportOrAdd = 'Report';
  }
  return (
    <span style={{ marginLeft: '100px' }}>
      Helpful?
      <span style={{ textDecoration: 'underline' }}>Yes</span>
      <span>(0) | </span>
      <span style={{ textDecoration: 'underline' }}>{reportOrAdd}</span>
    </span>
  );
};
>>>>>>> staging

export default Helpful;
