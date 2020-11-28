import { Modal } from '@material-ui/core';
import React, {useState} from 'react';
import "./qaStyle.scss";
import { useTracking } from 'react-tracking';
import moment from 'moment';

const QAphotos = (props) => {

    const { Track, trackEvent } = useTracking({ module: 'QA_PHOTOS' });
    const picClick = () => {
      showBigPic(!bigPic);
      trackEvent({time: moment().format(), type: 'PHOTO_CLICK'});
    }
    const [bigPic, showBigPic] = useState(false);
    const body = (
        <div className="photo-modal" >
        <img style={{maxWidth: "100%"}} src={props.photo} onClick={() => picClick()} alt={'photo'}></img>
        </div>
    )
    return (
        <Track>
        <span style={{marginRight: '1%'}}>
        <img src={props.photo} onClick={() => picClick()} alt={'photo'} width={75} height={75} className="photo-thumb"></img><Modal open={bigPic} onClose={() => showBigPic(!bigPic)} aria-labelledby="photo"
        aria-describedby="answer photo">{body}</Modal>
        </span>
        </Track>
    )
}

export default QAphotos;