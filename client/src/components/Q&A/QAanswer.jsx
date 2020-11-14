import React from 'react';
import Helpful from '../shared/Helpful';


const QAanswer = (props) => {

    return (
        <div>
            <div>A: {props.answer.body}</div>
            <span>by {props.answer.answerer_name},{props.answer.date.substring(0, 10)} |</span>
            <Helpful helped={props.answer.helpfulness} reportOrAdd='Report'/>
        </div>
    )
}

export default QAanswer;