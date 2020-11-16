import React from 'react';

const Helpful = (props) => {
    
    // onClick={!clickRorA ? props.onReportOrAdd : null}
    //onClick={!clickH ? props.onHelpful : null}
    return (
        <span >
            Helpful?
            <button style={{textDecoration: 'underline', border: 'none', cursor: 'pointer', background: 'none'}} >Yes</button>
            <span>({props.helped ? props.helped : 0}) | </span>
    <button style={{textDecoration: 'underline', border: 'none', cursor: 'pointer', background: 'none'}}>{props.reportOrAdd}</button>
        </span>
    )
}

export default Helpful;
