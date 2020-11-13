import React from 'react';
import QAsearch from './QAsearch';
import '../../styles/main.scss';

class QAmodule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            answers: []
        }
    }

    render() {
        return (
            <div className='qa-container' style={{display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                <div className='qa-header' style={{gridColumnEnd: '1'}} >QUESTIONS & ANSWERS</div>
                <QAsearch />
                
            </div>
        )
}
}

export default QAmodule;