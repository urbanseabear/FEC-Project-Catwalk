import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';



const AddModal = (props) => {
  const [open, setOpen] = useState(false);
  const body = (
    <div
      style={{
        backgroundColor: "whitesmoke",
        height: "400px",
        width: "600px",
        position: "fixed",
        top: "10%",
        left: "10%",
      }}
    >
      <h2 id="simple-modal-title">{props.title}</h2>
      <h3 id="simple-modal-description">About the {props.prodName}</h3>
      <textarea
        style={{ fontSize: "20px" }}
        defaultValue={props.name}
      ></textarea>
      <div>--------</div>
      <label
        style={{ fontSize: "20px", fontWeight: "bold" }}
        htmlFor={"nickname"}
      >
        Nickname*:{" "}
      </label>
      <input
        id={"nickname"}
        style={{
          fontSize: "20px",
        }}
        type="text"
        placeholder="Example: jackson11!"
      ></input>
      <div>For privacy reasons, do not use your full name or email address</div>
      <label style={{ fontSize: "20px", fontWeight: "bold" }} htmlFor={"email"}>
        E-mail*:{" "}
      </label>
      <input
        id={"email"}
        style={{
          fontSize: "20px",
        }}
        type="email"
        maxLength="60"
        placeholder="Why did you like the product or not?"
      ></input>
      <div>For authentication reasons only, you will not be emailed</div>
      <AddModal title={"Submit Question"} />
    </div>
  );

  var bStyle;
  var buttonText = '';
  if (props.bType === '1') {
      bStyle = {
        textDecoration: "underline",
        border: "none",
        cursor: "pointer",
        background: "none",
      }
      buttonText = 'Add Answer';
  } else {
      bStyle = {
            marginLeft: '20px',
            borderWidth: '2px',
            fontWeight: 'bold',
            fontSize: '20px',
            borderColor: 'black',
            background: 'none',
            padding: '20px 10px 20px 10px',
            cursor: 'pointer',
          }
          buttonText = 'ADD A QUESTION +'; 
      }
  
  return (
    <span>
      <button style={bStyle} onClick={() => setOpen(!open)}>
        {buttonText}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </span>
  );
};
export default AddModal;