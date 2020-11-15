import React from 'react';
import Helpful from '../shared/Helpful';
import QAanswer from './QAanswer';
import QAloadmore from './QAloadmore';

const QAentry = (props) => {
    var answerKeys = Object.keys(props.question.answers);
    var aArray = [];
    for (let i = 0; i < answerKeys.length; i++) {
        aArray.push(props.question.answers[answerKeys[i]]);
    }
    console.log(aArray);
    return (
        <div>
          <span style={{fontWeight: 'bold', fontSize: '20px'}}>Q: {props.question.question_body}      </span>
          <div>
              {aArray.map((aKey, i) => {
                if (i > 1) {
                    return <QAloadmore answers={aArray} key={i}/>
                }
                return <QAanswer key={i} answer={aKey}/> 
            })}
            </div>
        </div>
    )
}

export default QAentry;