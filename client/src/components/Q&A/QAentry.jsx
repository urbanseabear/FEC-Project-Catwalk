import React from 'react';
import Helpful from '../shared/Helpful';

const QAentry = (props) => {
    return (
        <div style={{gridRowStart: props.start, gridColumnStart: 'span 4', backgroundColor: "pink"}}>
          <span>Q: {props.question.question_body}      </span>
          <Helpful sideText={'report'}/>
          <div>
            A: 
          </div>  
        </div>
    )
}

export default QAentry;