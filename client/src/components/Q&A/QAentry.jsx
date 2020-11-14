import React from 'react';
import Helpful from '../shared/Helpful';
import QAanswer from './QAanswer';

const QAentry = (props) => {
    var answerKeys = Object.keys(props.question.answers);
    var aArray = [];
    for (let i = 0; i < answerKeys.length; i++) {
        aArray.push(props.question.answers[answerKeys[i]]);
    }
    console.log(aArray);
    return (
        <div style={{backgroundColor: "pink", gridColumnStart: 'span 3'}}>
          <span>Q: {props.question.question_body}      </span>
            {aArray.map((aKey, i) => {
                return <QAanswer key={i} answer={aKey}/> 
            })}
        </div>
    )
}

export default QAentry;