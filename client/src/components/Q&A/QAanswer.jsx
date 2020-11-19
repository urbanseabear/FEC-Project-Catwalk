import React from 'react';
import Helpful from '../shared/Helpful';
import QAphotos from './QAphotos';
import moment from 'moment';


const QAanswer = (props) => {
    
    return (
        <span>
            <div style={{marginLeft: '10px', marginTop: '10px', marginBottom: '5px', fontSize: '18px'}}><b>A:</b> {props.answer.body}</div>
            <div>
            {props.answer.photos.map((photo, i) => {
                return <QAphotos photo={photo} key={i}/>
            })}
            </div>
            <span style={{marginLeft: '40px', color: 'GrayText'}}>by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM D, YYYY')}  |</span>
            <span style={{color: 'GrayText', marginLeft: '5px'}}>
            <Helpful q_id={props.q_id} helped={props.answer.helpfulness} reportOrAdd='Report'/>
            </span>
        </span>
    )
}

export default QAanswer;