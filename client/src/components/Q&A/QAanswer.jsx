import React from 'react';
import Helpful from '../shared/Helpful';


const QAanswer = (props) => {

    return (
        <span >
            <div style={{marginLeft: '10px'}}>A: {props.answer.body}</div>
            <span style={{marginLeft: '10px'}}>by {props.answer.answerer_name},{props.answer.date.substring(0, 10)} |</span>
            <Helpful helped={props.answer.helpfulness} reportOrAdd='Report'/>
        </span>
    )
}

export default QAanswer;