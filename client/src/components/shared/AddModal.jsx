import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



    
const AddModal = (props) => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [picArr, setPicArr] = useState([]);
  

  const addUrl = (e) => {
      e.preventDefault();
      setPicArr([...picArr, url]);
      setUrl('');
  };
  
    var body;
  if (props.type === 'verify') {
     
      let eCheck = /.\.com|\.net|\.co.uk|\.co|\.fr|\.gov|\.edu|\.jp/;
      let isValid = eCheck.test(props.email);
      if (props.bod && props.user && props.email && isValid && open && props.pid) {
          axios.post(`http://3.21.164.220/qa/questions/`, {body: props.bod, name: props.user, email: props.email, product_id: props.pid})
          .then(() => {
              console.log('post q success meow');
              
          })
          .catch((err) => {
              console.log(err);
          })
        body = (
            <div
          style={{
            backgroundColor: "whitesmoke",
            height: "400px",
            width: "600px",
            position: "fixed",
            top: "20%",
            left: "20%",
          }}
        >
          <h2 id="modal-title">{props.title}</h2>
          <h3 id="modal-description">In relation to the {props.prodName}</h3>
          
          <div>Thank you for your submission!</div>
          <div></div>
          </div>
        );
      } else if (props.bod && props.user && isValid && props.email && open && props.qid) {
        axios.post(`http://3.21.164.220/qa/questions/${props.qid}/answers`, {body: props.bod, name: props.user, email: props.email, photos: props.pics})
        .then(() => {
           
            //props.submit();
            console.log('post a success meow');
        })
        .catch((err) => {
            console.log(err);
        })
      body = (
          <div
        style={{
          backgroundColor: "whitesmoke",
          height: "400px",
          width: "600px",
          position: "fixed",
          top: "20%",
          left: "20%",
        }}
      >
        <h2 id="modal-title">{props.title}</h2>
        <h3 id="modal-description">In relation to the {props.prodName}</h3>
        
        <div>Thank you for your submission!</div>
        <div></div>
        </div>
      );
    } else {
        
        body = (
            <div
          style={{
            backgroundColor: "whitesmoke",
            height: "300px",
            width: "600px",
            position: "fixed",
            top: "20%",
            left: "20%",
          }}
        >
         <div style={{marginLeft: '2%'}}>
          <h2 id="modal-title">OOPS!</h2>
          <h3 id="modal-description">In relation to the {props.prodName}</h3>
          <div style={{color: 'red'}}>Please fix your submission. Required input values are missing or invalid:</div>
          <div style={{marginTop: '2%', fontSize: '20px', color: 'red', visibility: props.bod ? 'hidden':'visible'}}>QUESTION FIELD LEFT BLANK</div>
          <div style={{marginTop: '2%', fontSize: '20px', color: 'red', visibility: props.user ? 'hidden':'visible'}}>NICKNAME LEFT BLANK</div>
          <div style={{marginTop: '2%', fontSize: '20px', color: 'red', visibility: props.email ? 'hidden':'visible'}}>E-MAIL ADDRESS IS INVALID</div>
          </div>
          </div>
        ); 
      }
  } else {
      var answerDesc = '';
      var showPicEntry = '';
  if (props.question !== undefined) {
      answerDesc = `${props.prodName}: ${props.question}`;
      showPicEntry = 'visible'
  }
  else {
      answerDesc = `About the ${props.prodName}`;
      showPicEntry = 'hidden';
  }
  body = (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        position: "fixed",
        outline: 'none',
        top: "10%",
        left: "25%",
      }}
    >
      <h2 style={{marginLeft: '2%'}} id="modal-title">{props.title}</h2>
      <h3 style={{marginLeft: '2%'}} id="modal-description">{answerDesc}</h3>
      <textarea
        style={{ marginLeft: '4%', fontSize: "20px", width: '90%', height: '100px' }}
        defaultValue={props.name}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <div style={{margin: '2% 10% 2% 10%', borderBottom: 'dashed', borderColor: 'gray', borderWidth: '2px'}}></div>
      <label
        style={{marginLeft: '4%', fontSize: "20px", fontWeight: "bold" }}
        htmlFor="nickname"
      >
        Nickname*:{" "}
      </label>
      <input
        onChange={(e) => setUser(e.target.value)}
        id="nickname"
        style={{
          border: 'none',
          borderBottom: '4px',
          borderColor: 'black',
          marginBottom: '5px',
          fontSize: "20px",
          outline: 'none'
        }}
        type="text"
        placeholder="Example: jackson11!"
      ></input>
      <div style={{marginLeft: '2%', marginBottom: '2%'}}>For privacy reasons, do not use your full name or email address</div>
      <label style={{marginLeft: '4%', fontSize: "20px", fontWeight: "bold" }} htmlFor="email">
        E-mail*:{" "}
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        style={{
          border: 'hidden',
          width: '60%',
          marginBottom: '5px',
          fontSize: "20px",
          outline: 'none'
        }}
        type="email"
        maxLength="60"
        pattern=".+.com|.+.net|.+.co.uk|.+.fr|.+.gov|.+.edu|.+.jp"
        placeholder="Example: meow@gmail.com"
      ></input>
      <div style={{marginLeft: '2%'}}>For authentication reasons only, you will not be emailed</div>
      <label htmlFor='picUrl' style={{marginLeft: '2%', marginTop: '2%', visibility: showPicEntry}}>Enter Pics:</label>
      <input
        onChange={(e) => setUrl(e.target.value)} 
        type='text'
        id='picUrl'
        style={{
          border: 'hidden',
          width: '60%',
          marginBottom: '5px',
          fontSize: "20px",
          outline: 'none'
        }}
        placeholder="example.com/photo.jpg"></input>
      <button disabled={picArr.length === 5 ? true:false} onClick={addUrl}>add image</button>
      <img  style={{visibility: picArr.length > 0 ? 'visible':'hidden'}} src={picArr[0]} alt={'photo'} width={75} height={75} />
      <img  style={{visibility: picArr.length > 1 ? 'visible':'hidden'}} src={picArr[1]} alt={'photo'} width={75} height={75} />
      <img  style={{visibility: picArr.length > 2 ? 'visible':'hidden'}} src={picArr[2]} alt={'photo'} width={75} height={75} />
      <img  style={{visibility: picArr.length > 3 ? 'visible':'hidden'}} src={picArr[3]} alt={'photo'} width={75} height={75} />
      <img  style={{visibility: picArr.length > 4 ? 'visible':'hidden'}} src={picArr[4]} alt={'photo'} width={75} height={75} />
      <div></div>
      <span >
      <AddModal title={"Thanks!"} type={'verify'} pics={picArr} bod={post} user={user} email={email} pid={props.pid} qid={props.qid} prodName={props.prodName}/>
      </span>
    </div>
  );
}

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
  } else if (props.type === 'verify') {
      bStyle = {
        marginTop: '20px',
        marginLeft: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '20px',
        border: 'none',
        outline: 'none',
        background: 'none',
        paddingBottom: '20px'
      }
      buttonText = 'SUBMIT';
  } else {
      bStyle = {
            marginTop: '20px',
            borderWidth: '2px',
            fontWeight: 'bold',
            fontSize: '20px',
            borderColor: 'black',
            background: 'none',
            padding: '20px 10px 20px 10px',
            cursor: 'pointer',
          }
          buttonText = `ADD A ${props.name.toUpperCase()} +`; 
      }
  
  return (
    <span>
      <button style={bStyle} onClick={() => setOpen(!open)}>
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
          <Fade in={open}>
        {body}
        </Fade>
      </Modal>
    </span>
  );
};
export default AddModal;