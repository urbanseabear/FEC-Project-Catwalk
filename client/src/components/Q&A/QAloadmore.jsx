import React, { useState } from "react";
import QAanswer from "./QAanswer";
import QAentry from "./QAentry";
import "./qaStyle.scss";

const QAloadmore = (props) => {
  const [allAnswers, setAllAnswers] = useState(false);
  const [allQuestions, setAllQuestions] = useState(false);

  if (props.answers !== undefined && allAnswers === false) {
    return (
      <div>
        <button
          onClick={() => setAllAnswers(!allAnswers)}
          id="load-answer"
        >
          LOAD MORE ANSWERS
        </button>
      </div>
    );
  } else if (allAnswers === true) {
    return (
      <div>
        {props.answers.slice(2).map((aKey, i) => {
          return <QAanswer key={i} answer={aKey} />;
        })}
        <div>
          <button
            id="collapse-answer"
            onClick={() => setAllAnswers(!allAnswers)}
          >
            COLLAPSE ANSWERS
          </button>
        </div>
      </div>
    );
  } else if (props.questions !== undefined && allQuestions === false) {
    return (
      <div
        style={{
          gridRowStart: "4",
          gridColumnEnd: "span 4",
        }}
      >
        <button
          className="load-questions"
          onClick={() => setAllQuestions(!allQuestions)}
          
        >
          MORE ANSWERED QUESTIONS
        </button>
      </div>
    );
  } else if (allQuestions === true) {
    return (
      <div>
        {props.questions.slice(4).map((oneQuestion) => {
          return (
            <QAentry question={oneQuestion} key={oneQuestion.question_id} />
          );
        })}
        <div>
          <button
          className="load-questions"
            onClick={() => setAllQuestions(!allQuestions)}
          >
            LESS ANSWERED QUESTIONS
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default QAloadmore;
