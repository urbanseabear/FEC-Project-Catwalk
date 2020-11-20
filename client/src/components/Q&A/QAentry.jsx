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
    return (
        <div style={{marginTop: '10px', }}>
          <span style={{fontWeight: 'bold', fontSize: '22px', display: "flex", justifyContent: "space-between"}}>Q: {props.question.question_body}     <Helpful submit={props.submit} helped={props.question.question_helpfulness} question={props.question} product={props.product} reportOrAdd={'Add Answer'}/></span>
          <div>
              {aArray.slice(0, 3).map((aKey, i) => {
                if (i === 2) {
                    return <QAloadmore answers={aArray} key={i}/>
                }
                return <QAanswer key={i} answer={aKey}/> 
            })}
            </div>
        </div>
    )
}

export default QAentry;