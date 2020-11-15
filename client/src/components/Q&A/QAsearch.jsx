import React from "react";
import "../../styles/main.scss";

const QAsearch = (props) => {
  return (
    <div style={{ gridRowStart: "2", gridColumnStart: "span 4" }}>
      <input
        style={{
          width: "95%",
          paddingLeft: "10px",
          paddingBottom: "15px",
          paddingTop: "15px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
        className="qa-search-bar"
        type="text"
        placeholder="Have a question? Search for answers..."
      ></input>
    </div>
  );
};

export default QAsearch;
