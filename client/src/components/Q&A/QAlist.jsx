import React from 'react';
import QAentry from './QAentry';


const QAlist = (props) => {
    //const [answers, setAnswers] = useState(null);
    //function useAnswers(qID) {}
    return (
        <div >
            {props.questions.map((oneQuestion, i) => {
                var start = i + 3;
                return <QAentry style={{gridRowStart: {start}, gridColumnStart: 'span 3', backgroundColor: "pink"}} question={oneQuestion} key={oneQuestion.question_id} />
            })}
            
        </div>
    )
}

export default QAlist;