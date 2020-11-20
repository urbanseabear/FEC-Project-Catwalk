import React from "react";
import "../../styles/main.scss";
import SearchIcon from '@material-ui/icons/Search';

const QAsearch = (props) => {
  return (
    <div style={{ gridRowStart: "2", gridColumnStart: "span 4", display: 'flex'}}>
      <input
        onChange={(e) => props.search(e)} 
        style={{
          
          width: "95%",
          paddingLeft: "10px",
          paddingBottom: "15px",
          paddingTop: "15px",
          fontWeight: "bold",
          fontSize: "20px",
          borderWidth: '4px',
          borderColor: 'black',
          borderStyle: 'solid none solid solid',
          outline: 'none'
        }}
        className="qa-search-bar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      ></input><SearchIcon style={{padding: '10px 5px 10px 1px', fontSize: '40px', borderStyle: 'solid solid solid none'}}/>
    </div>
  );
};

export default QAsearch;
