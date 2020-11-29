import React, { Component } from 'react';
import '../styles/main.scss';
import Overview from './overview/overview.jsx';
import QAmodule from './Q&A/QAmodule';
import ReviewRatings from './R&R/ReviewRatings';
import Grid from '@material-ui/core/Grid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 5,
      productName: '',
      sortBy: '',
      page: 1,
      count: 100,
    };

    this.onSearch = this.onSearch.bind(this);
    this.onProductNameChange = this.onProductNameChange.bind(this);
  }

  onSearch(productId) {
    this.setState({
      productId: productId
    });
  }

  onProductNameChange(productName) {
    this.setState({
      productName: productName
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Overview 
              productId={ this.state.productId }
              onSearch={this.onSearch}
              onProductNameChange={this.onProductNameChange}
            />
          </Grid>
          <Grid style={{ margin: '0% 10%' }} item xs={12}>
            <QAmodule prodID={ this.state.productId} />
          </Grid>
          <Grid style={{ margin: '0% 10%' }} item xs={12}>
            <ReviewRatings
              productId={this.state.productId}
              sortBy={this.state.sortBy}
              page={this.state.page}
              count={this.state.count}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
