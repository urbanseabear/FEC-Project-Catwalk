import React from 'react';
import QAentry from './QAentry';
import QAloadmore from './QAloadmore';
import '../../styles/main.scss';

const QAlist = (props) => {
    if (props.search === null) {
    return (
        <div id='qa-list' style={{gridColumnStart: 'span 4', maxHeight: '50vh', overflowY: 'scroll'}}>
            {props.questions.slice(0, 5).map((oneQuestion, i) => {
                if (i === 4) {
                    console.log('meow');
                    return <QAloadmore key={i} questions={props.questions}/>
                }
                return <QAentry  question={oneQuestion} key={oneQuestion.question_id} />
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
            <div id='qa-list' style={{gridColumnStart: 'span 4', maxHeight: '50vh', overflowY: 'scroll'}}>
            {searchedQs.slice(0, 5).map((oneQuestion, i) => {
                if (i === 4) {
                    console.log('meow');
                    return <QAloadmore key={i} questions={props.questions}/>
                }
                return <QAentry  question={oneQuestion} key={oneQuestion.question_id} />
            })}
        </div>
        )
    }
}

export default QAlist;