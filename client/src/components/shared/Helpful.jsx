import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import AddModal from "./AddModal";

const Helpful = (props) => {
  const [isReported, setReported] = useState(false);
  const [isHelpful, setHelpful] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const report = useCallback(() => {
    if (isReported) {
      return;
    }
    setReported(true);
    axios
      .put(`http://3.21.164.220/qa/answers/`, {
        params: { answer_id: props.a_id },
      })
      .then(() => {
        if (isMounted.current) {
          setReported(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isReported]);

  const helpful = useCallback(() => {
    if (isHelpful) return;
    setHelpful(true);
    if (props.reportOrAdd === "Report") {
      //mark answer helpful
      axios
        .put(`http://3.21.164.220/qa/answers/${props.a_id}/helpful`, {
          params: { answer_id: props.a_id },
        })
        .then(() => {
          console.log('helpful answer meow');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //mark question helpful
      axios
        .put(`http://3.21.164.220/qa/questions/${props.question.question_id}/helpful`, {
          params: { question_id: props.question.question_id },
        })
        .then(() => {
          console.log('helpful question meow')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isHelpful]);

  if (props.reportOrAdd !== "Report") {
    return (
      <span style={{ fontWeight: "normal", fontSize: "16px" }}>
        Helpful?
        <button
          disabled={isHelpful}
          onClick={helpful}
          style={{
            textDecoration: "underline",
            border: "none",
            cursor: "pointer",
            background: "none",
          }}
        >
          Yes
        </button>
        <span>({isHelpful ? props.helped + 1: props.helped}) | </span>
        <AddModal
          name={props.reportOrAdd}
          bType={"1"}
          title={"Submit Your Answer"}
          prodName={props.product}
          pid={props.pid}
          qid={props.question.question_id}
          question={props.question.question_body}
        />
      </span>
    );
  } else {
    return (
      <span>
        Helpful?
        <button
          disabled={isHelpful}
          onClick={helpful}
          style={{
            textDecoration: "underline",
            border: "none",
            cursor: "pointer",
            background: "none",
          }}
        >
          Yes
        </button>
        <span>({isHelpful ? props.helped + 1: props.helped}) | </span>
        <button
          disabled={isReported}
          onClick={report}
          style={{
            textDecoration: "underline",
            border: "none",
            cursor: "pointer",
            background: "none",
          }}
        >
          {isReported ? "REPORTED" : props.reportOrAdd}
        </button>
      </span>
    );
  }
};

export default Helpful;
