import React from 'react';
import QAsearch from './QAsearch';
import './qaStyle.scss';
import '../../styles/main.scss';
import qaData from './qa-sample-data';
import QAlist from './QAlist';
import AddModal from '../shared/AddModal';
import axios from 'axios';
import track, { useTracking } from 'react-tracking';

class QAmodule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: qaData.questions,
      product: '',
      qaSent: 0,
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleSearch(e) {
      this.setState({search: e.target.value});
  }

  handleSubmission() {
    this.setState({qaSent: this.state.qaSent + 1});
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.qaSent !== this.state.qaSent || prevProps.prodID !== this.props.prodID) {
        this.getData();
      }
  }
  componentDidMount() {
      this.getData();
  }

  getData() {
      var pid = this.props.prodID;
      axios.get(`http://3.21.164.220/qa/questions/`, {params: {product_id: pid, count: 50}})
      .then((result) => {
          this.setState({questions: result.data});
      })
      .then(()=> {
          axios.get(`http://3.21.164.220/products/${pid}`)
          .then((result) =>{
              this.setState({product: result.data.name});
          })
      })
      .catch((err) => {
          console.log(err);
      })
  }

  render() {
    return (
      <div className='qa-container' >
        <div className='qa-header'>QUESTIONS & ANSWERS</div>
        <QAsearch search={this.handleSearch}/>
        <QAlist
          submit={this.handleSubmission}
          answers={this.state.answers}
          product={this.state.product}
          questions={this.state.questions.results}
          search={this.state.search.length > 2 ? this.state.search : null}
        />
        <AddModal name={'question'} submit={this.handleSubmission} pid={this.props.prodID} title={'Ask A Question'} prodName={this.state.product}/>
      </div>
    );
  }
}

export default QAmodule;
