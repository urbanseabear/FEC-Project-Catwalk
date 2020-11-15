import React from 'react';
import QAsearch from './QAsearch';
import '../../styles/main.scss';
import qaData from './qa-sample-data';
import QAlist from './QAlist';
import Helpful from '../shared/Helpful';

class QAmodule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: qaData.questions,
    };
  }

  render() {
    return (
      <div
        className='qa-container'
        style={{
          display: 'grid',
          gridTemplateRows: '.5fr 1fr 3fr 1 fr',
          gridTemplateColumns: '3fr .5fr .25fr 1.25fr',
          // took out the margin here so i can apply it to the App.js Grid
          gap: '10px',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
        <div
          className='qa-header'
          style={{
            gridColumnEnd: 'span 4',
            fontSize: '16px',
            height: '30px'
          }}>
          QUESTIONS & ANSWERS
        </div>
        <QAsearch />
        <QAlist
          answers={this.state.answers}
          questions={this.state.questions.results}
        />
        <div style={{ gridColumnStart: '4', marginTop: '10px'}}>
          <Helpful helped={this.state.questions.results[0].question_helpfulness} reportOrAdd={'Add Answer'} />
          <div style={{ marginTop: '60px', marginBottom: '50px' }}></div>
          <Helpful helped={this.state.questions.results[1].question_helpfulness} reportOrAdd={'Add Answer'} />
        </div>
        <div
          style={{
            gridRowStart: '4',
            gridColumnEnd: 'span 4'
          }}>
          <button
            style={{
              borderWidth: '2px',
              borderColor: 'black',
              background: 'none',
              padding: '15px 5px 15px 5px',
              cursor: 'pointer',
            }}>
            MORE ANSWERED QUESTIONS
          </button>
          <button
            style={{
              marginLeft: '20px',
              borderWidth: '2px',
              borderColor: 'black',
              background: 'none',
              padding: '15px 5px 15px 5px',
              cursor: 'pointer',
            }}>
            ADD A QUESTION +
          </button>
        </div>
      </div>
    );
  }
}

export default QAmodule;
