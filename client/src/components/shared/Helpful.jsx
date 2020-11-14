import React from 'react';

const Helpful = (props) => {
    
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

export default Helpful;