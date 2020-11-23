import React from "react";
import "./qaStyle.scss";
import SearchIcon from '@material-ui/icons/Search';

const QAsearch = (props) => {
  return (
    <div className="qa-search">
      <input
        onChange={(e) => props.search(e)} 
        className="qa-search-bar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      ></input><SearchIcon id="searchIcon"/>
    </div>
  );
};

export default QAsearch;
