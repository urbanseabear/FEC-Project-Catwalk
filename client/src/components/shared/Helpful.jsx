import React from "react";
import AddModal from "./AddModal";

const Helpful = (props) => {
  // onClick={props.helpfulClick}
  //onClick={props.reportClick}
  if (props.reportOrAdd !== "Report") {
    return (
      <span style={{display: "flex", justifyContent: "flex-end" }}>
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
        <button
          style={{
            textDecoration: "underline",
            border: "none",
            cursor: "pointer",
            background: "none",
          }}
        >
          {props.reportOrAdd}
        </button>
      </span>
    );
  }
};

export default Helpful;
