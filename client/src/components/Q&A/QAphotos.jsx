import { Modal } from '@material-ui/core';
import React, {useState} from 'react';


const QAphotos = (props) => {

    const [bigPic, showBigPic] = useState(false);
    const body = (
        <div style={{position: 'fixed', top: '10%', left: '10%', maxWidth: '800px', maxHeight: '600px'}}>
        <img  src={props.photo} onClick={() => showBigPic(!bigPic)} alt={'photo'}></img>
        </div>
    )
    return (
        <span>
        <img src={props.photo} onClick={() => showBigPic(!bigPic)} alt={'photo'} width={75} height={75} style={{boxShadow: '5px 5px 5px gray', verticalAlign: 'middle', margin: '20px 0px'}}></img><Modal open={bigPic} onClose={() => showBigPic(!bigPic)} aria-labelledby="photo"
        aria-describedby="answer photo">{body}</Modal>
        </span>
    )
}

export default QAphotos;