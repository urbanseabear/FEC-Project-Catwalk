import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import AddModal from "./AddModal";

const Helpful = (props) => {
  // onClick={props.helpfulClick}
  //onClick={props.reportClick}
  const [isReported, setReported] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
      return () => {
          isMounted.current = false;
      }
    
  }, [])

  const report = useCallback(() => {
      if (isReported) {return;}
      setReported(true);
      axios.put(`http://3.21.164.220/qa/questions/`, {params: {question_id: props.q_id}})
      .then(() => {
        if (isMounted.current) {
            setReported(false);
        }
      })
      .catch((err) => {
          console.log(err);
      })
  }, [isReported])

  if (props.reportOrAdd !== "Report") {
    return (
      <span>
        Helpful?
        <button
          style={{
            textDecoration: "underline",
            border: "none",
            cursor: "pointer",
            background: "none",
          }}
        >
          Yes
        </button>
        <span>({props.helped ? props.helped : 0}) | </span>
        <AddModal name={props.reportOrAdd} bType={'1'} title={'Submit Your Answer'} prodName={'Yeezy UltraMax 5000'} question={props.question}/>  
      </span>
    );
  } else {
    return (
      <span >
        Helpful?
        <button
          style={{
            textDecoration: "underline",
            border: "none",
            cursor: "pointer",
            background: "none",
          }}
        >
          Yes
        </button>
        <span>({props.helped ? props.helped : 0}) | </span>
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
          {isReported ? 'REPORTED' : props.reportOrAdd}
        </button>
      </span>
    );
  }
};

export default Helpful;
