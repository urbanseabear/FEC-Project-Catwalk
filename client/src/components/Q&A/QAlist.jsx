import React from 'react';
import QAentry from './QAentry';
import QAloadmore from './QAloadmore';

const QAlist = (props) => {
    //const [answers, setAnswers] = useState(null);
    //function useAnswers(qID) {}
    return (
        <div style={{gridColumnStart: 'span 4'}}>
            {props.questions.map((oneQuestion, i) => {
                if (i > 1 && props.questions.length > i) {
                    return <QAloadmore key={i} questions={props.questions}/>
                }
                return <QAentry  question={oneQuestion} key={oneQuestion.question_id} />
            })}
        </div>
    )
}

export default QAlist;