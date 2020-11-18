import React, { useState } from "react";
import QAanswer from "./QAanswer";
import QAentry from "./QAentry";

const QAloadmore = (props) => {
  const [allAnswers, setAllAnswers] = useState(false);
  const [allQuestions, setAllQuestions] = useState(false);

  if (props.answers !== undefined && allAnswers === false) {
    return (
      <div>
        <button
          onClick={() => setAllAnswers(!allAnswers)}
          style={{
            marginLeft: "10px",
            marginTop: "20px",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
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
            onClick={() => setAllAnswers(!allAnswers)}
            style={{
              marginLeft: "10px",
              marginTop: "20px",
              marginBottom: "10px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
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
          onClick={() => setAllQuestions(!allQuestions)}
          style={{
            borderWidth: "2px",
            borderColor: "black",
            background: "none",
            fontWeight: "bold",
            marginTop: "20px",
            fontSize: "20px",
            padding: "20px 10px 20px 10px",
            cursor: "pointer",
          }}
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
            onClick={() => setAllQuestions(!allQuestions)}
            style={{
              borderWidth: "2px",
              borderColor: "black",
              background: "none",
              fontWeight: "bold",
              marginTop: "20px",
              fontSize: "20px",
              padding: "20px 10px 20px 10px",
              cursor: "pointer",
            }}
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
