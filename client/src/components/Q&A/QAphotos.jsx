import { Modal } from '@material-ui/core';
import React, {useState} from 'react';


const QAphotos = (props) => {

    const [bigPic, showBigPic] = useState(false);
    const body = (
        <div className="photo-modal" >
        <img  src={props.photo} onClick={() => showBigPic(!bigPic)} alt={'photo'}></img>
        </div>
    )
    return (
        <span style={{marginRight: '1%'}}>
        <img src={props.photo} onClick={() => showBigPic(!bigPic)} alt={'photo'} width={75} height={75} className=".photo-thumb"></img><Modal open={bigPic} onClose={() => showBigPic(!bigPic)} aria-labelledby="photo"
        aria-describedby="answer photo">{body}</Modal>
        </span>
    )
}

export default QAphotos;