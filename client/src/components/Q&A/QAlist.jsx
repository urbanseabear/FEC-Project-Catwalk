import React from 'react';
import QAentry from './QAentry';
import QAloadmore from './QAloadmore';
import './qaStyle.scss';

const QAlist = (props) => {
    if (props.search === null) {
    return (
        <div id='qa-list'>
            {props.questions.slice(0, 5).map((oneQuestion, i) => {
                if (i === 4) {
                    return <QAloadmore key="111111111111111111111" questions={props.questions}/>
                }
                return <QAentry submit={props.submit} product={props.product} question={oneQuestion} key={oneQuestion.question_id} />
            })}
        </div>
    )
    } else {
        var searchedQs = props.questions.filter((q) => {
            if (q.question_body.toLowerCase().includes(props.search.toLowerCase())) {
                return q;
            }
        });
        return (
            <div id='qa-list'>
            {searchedQs.slice(0, 5).map((oneQuestion, i) => {
                if (i === 4) {
                    return <QAloadmore key="111111111111111111111" questions={props.questions}/>
                }
                return <QAentry submit={props.submit} product={props.product} question={oneQuestion} key={oneQuestion.question_id} />
            })}
        </div>
        )
    }
}

export default QAlist;