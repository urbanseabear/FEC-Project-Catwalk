import React from 'react';
import QAsearch from './QAsearch';
import '../../styles/main.scss';
import qaData from './qa-sample-data';
import QAlist from './QAlist';
import AddModal from '../shared/AddModal';

class QAmodule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: qaData.questions,
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
      this.setState({search: e.target.value});
  }

  render() {
    {if (this.state.questions === null) {
        var showQAlist = false;
    }}
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
        <QAsearch search={this.handleSearch}/>
        <QAlist
          answers={this.state.answers}
          questions={this.state.questions.results}
        />
        <AddModal name={'question'} title={'Ask A Question'} prodName={'Yeezy UltraMax 5000'}/>
      </div>
    );
  }
}

export default QAmodule;
