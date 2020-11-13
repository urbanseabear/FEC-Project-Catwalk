import React from 'react';
import Helpful from '../shared/Helpful';

const QAentry = (props) => {
    return (
        <div>
          <span>Q: {props.question.question_body}      </span>
          <Helpful style={{float: 'right'}} sideText={'report'}/>
          <div>
            A: 
          </div>  
        </div>
    )
}

export default QAentry;