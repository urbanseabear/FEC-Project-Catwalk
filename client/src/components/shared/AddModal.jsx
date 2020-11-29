import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "../Q&A/qaStyle.scss";
import '../../styles/main.scss';
import { useTracking } from 'react-tracking';
import moment from 'moment';

const AddModal = (props) => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [picArr, setPicArr] = useState([]);
  const { trackEvent } = useTracking({ module: 'ADD_MODAL' });

  const addUrl = (e) => {
    e.preventDefault();
    setPicArr([...picArr, url]);
    setUrl("");
  };

  const removeUrl = (e) => {
    e.preventDefault();
    setPicArr(picArr.slice(0, picArr.length - 1));
  }

  const modalClick = () => {
    setOpen(!open);
    trackEvent({time: moment().format(), type: trackType});
    console.log(window.dataLayer);
  }

  var body;
  if (props.type === "verify") {
    let eCheck = /.\.com|\.net|\.co.uk|\.co|\.fr|\.gov|\.edu|\.jp/;
    let isValid = eCheck.test(props.email);
    if (
      props.bod &&
      props.user &&
      props.email &&
      isValid &&
      open &&
      props.pid
    ) {
      axios
        .post(`http://3.21.164.220/qa/questions/`, {
          body: props.bod,
          name: props.user,
          email: props.email,
          product_id: props.pid,
        })
        .then(() => {
          console.log("post q success meow");
        })
        .catch((err) => {
          console.log(err);
        });
      body = (
        <div className="submit-modal">
          <h2 id="modal-title">{props.title}</h2>
          <h3 id="modal-description">In relation to the {props.prodName}</h3>

          <div>Thank you for your submission!</div>
          <div></div>
        </div>
      );
    } else if (
      props.bod &&
      props.user &&
      isValid &&
      props.email &&
      open &&
      props.qid
    ) {
      axios
        .post(`http://3.21.164.220/qa/questions/${props.qid}/answers`, {
          body: props.bod,
          name: props.user,
          email: props.email,
          photos: props.pics,
        })
        .then(() => {
          //props.submit();
          console.log("post a success meow");
        })
        .catch((err) => {
          console.log(err);
        });
      body = (
        <div className="submit-modal">
          <h2 id="modal-title">{props.title}</h2>
          <h3 id="modal-description">In relation to the {props.prodName}</h3>

          <div>Thank you for your submission!</div>
          <div></div>
        </div>
      );
    } else {
      body = (
        <div className="submit-modal">
          <div style={{ marginLeft: "2%" }}>
            <h2 id="modal-title">OOPS!</h2>
            <h3 id="modal-description">In relation to the {props.prodName}</h3>
            <div style={{ color: "red" }}>
              Please fix your submission. Required input values are missing or
              invalid:
            </div>
            <div hidden={props.bod} className="empty-field">
              QUESTION FIELD LEFT BLANK
            </div>
            <div hidden={props.user} className="empty-field">
              NICKNAME LEFT BLANK
            </div>
            <div hidden={props.email} className="empty-field">
              E-MAIL ADDRESS IS INVALID
            </div>
          </div>
        </div>
      );
    }
  } else {
    var answerDesc = "";
    if (props.question !== undefined) {
      answerDesc = `${props.prodName}: ${props.question}`;
    } else {
      answerDesc = `About the ${props.prodName}`;
    }
    body = (
      <div className="add-modal">
        <h2 style={{ marginLeft: "2%", color: 'whitesmoke'}} id="modal-title">
          {props.title}
        </h2>
        <h3 style={{ marginLeft: "2%", color: 'whitesmoke'}} id="modal-description">
          {answerDesc}
        </h3>
        <textarea
          className="form-input-area"
          defaultValue={props.name}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <div
          style={{
            margin: "2% 10% 2% 10%",
            borderBottom: "dashed",
            borderColor: "gray",
            borderWidth: "2px",
          }}
        ></div>
        <label className="form-label" htmlFor="nickname">
          Nickname
        </label>
        <span style={{ fontSize: '25px', color: '#f50057', marginRight: '5px'}}>* 
        </span>
        <input
          onChange={(e) => setUser(e.target.value)}
          id="nickname"
          className="form-input"
          type="text"
          placeholder="Example: jackson11!"
        ></input>
        <div className="disclaimers">
          For privacy reasons, do not use your full name or email address
        </div>
        <label className="form-label" htmlFor="email">
          E-mail
        </label>
        <span style={{ fontSize: '25px', color: '#f50057', marginRight: '5px'}}>* 
        </span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="form-input"
          type="email"
          maxLength="60"
          pattern=".+.com|.+.net|.+.co.uk|.+.fr|.+.gov|.+.edu|.+.jp"
          placeholder="Example: meow@gmail.com"
        ></input>
        <div className="disclaimers">
          For authentication reasons only, you will not be emailed
        </div>
        <label
          className="form-label"
          htmlFor="picUrl"
          hidden={!(props.name === "Add Answer")}
        >
          Enter Pics:{" "}
        </label>
        <input
          onChange={(e) => setUrl(e.target.value)}
          hidden={!(props.name === "Add Answer")}
          type="text"
          id="picUrl"
          className="form-input"
          placeholder="example.com/photo.jpg"
        ></input>
        <div></div>
        <button
          className="picButton"
          style={{marginLeft: "4%"}}
          hidden={!(props.name === "Add Answer")}
          disabled={picArr.length === 5 ? true : false}
          onClick={addUrl}
        >
          ADD IMAGE
        </button>
        <button
          className="picButton"
          hidden={!(props.name === "Add Answer")}
          disabled={picArr.length === 0 ? true : false}
          onClick={removeUrl}
        >
          REMOVE IMAGE
        </button>
        <div></div>
        <img
          hidden={!(picArr.length > 0)}
          src={picArr[0]}
          alt={"photo1"}
          width={75}
          height={75}
        />
        <img
          hidden={!(picArr.length > 1)}
          src={picArr[1]}
          alt={"photo2"}
          width={75}
          height={75}
        />
        <img
          hidden={!(picArr.length > 2)}
          src={picArr[2]}
          alt={"photo3"}
          width={75}
          height={75}
        />
        <img
          hidden={!(picArr.length > 3)}
          src={picArr[3]}
          alt={"photo4"}
          width={75}
          height={75}
        />
        <img
          hidden={!(picArr.length > 4)}
          src={picArr[4]}
          alt={"photo5"}
          width={75}
          height={75}
        />
        <div></div>
        <span>
          <AddModal
            title={"Thanks!"}
            type={"verify"}
            pics={picArr}
            bod={post}
            user={user}
            email={email}
            pid={props.pid}
            qid={props.qid}
            prodName={props.prodName}
          />
        </span>
      </div>
    );
  }

  var bStyle;
  var cName;
  var buttonText = "";
  var trackType = "";
  if (props.bType === "1") {
    cName = "helpful-button";
    buttonText = "Add Answer";
    trackType = "ADD_ANSWER";
  } else if (props.type === "verify") {
    bStyle = {fontSize: '16px', float: 'right'};
    buttonText = "SUBMIT";
    trackType = "SUBMIT";
  } else {
    bStyle = {fontSize: '20px'};
    buttonText = `ADD A ${props.name.toUpperCase()} +`;
    trackType = "ADD_QUESTION";
  }
  
  if (buttonText === "Add Answer") {
    return (
    <span>
      <button
        className={cName}
        onClick={() => modalClick()}>
        {buttonText}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{body}</Fade>
      </Modal>
    </span>
  );
  } else {
  return (
    <span>
      <Button
        color='primary'
        style={bStyle}
        variant='contained'
        onClick={() => modalClick()}>
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{body}</Fade>
      </Modal>
    </span>
  );
      }
};
export default AddModal;
