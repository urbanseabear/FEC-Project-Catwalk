import React from 'react';
import Helpful from '../shared/Helpful';


const QAanswer = (props) => {

    return (
        <span>
            <div style={{marginLeft: '10px', marginTop: '10px', marginBottom: '5px', fontSize: '16px'}}>A: {props.answer.body}</div>
            <span style={{marginLeft: '10px', color: 'GrayText'}}>by {props.answer.answerer_name},{props.answer.date.substring(0, 10)} |</span>
            <span style={{color: 'GrayText'}}>
            <Helpful helped={props.answer.helpfulness} reportOrAdd='Report'/>
            </span>
        </span>
    )
}

export default QAanswer;