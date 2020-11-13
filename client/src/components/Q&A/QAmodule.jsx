import React from 'react';
import QAsearch from './QAsearch';
import '../../styles/main.scss';
import qaData from './qa-sample-data';
import QAlist from './QAlist';


class QAmodule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: qaData.questions
        }
    }

    render() {
        return (
            <div className='qa-container' style={{display: 'grid', gridTemplateRows: '.5fr 1fr 3fr 1 fr', gridTemplateColumns: '3fr .5fr .5fr 1fr', gap: '10px', marginLeft: '50px', marginRight: '50px'}}>
                <div className='qa-header' style={{gridColumnEnd: 'span 4', fontSize: '20px', backgroundColor: 'red', height: '30px'}} >QUESTIONS & ANSWERS</div>
                <QAsearch />
                <QAlist answers={this.state.answers} questions={this.state.questions.results}/>
            
                
            </div>
        )
}
}

export default QAmodule;