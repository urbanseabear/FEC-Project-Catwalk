import React from 'react';
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
            <div className='qa-header'>QUESTIONS & ANSWERS</div>
        )
}
}

export default QAmodule;