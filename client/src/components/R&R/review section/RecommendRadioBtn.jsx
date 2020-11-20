import React, { Component } from 'react';

export default class RecommendRadioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: false,
      no: false,
    };
    this.checked = this.checked.bind(this);
  }

  checked(e) {
    e === 'yes'
      ? this.setState({ yes: !this.state.yes })
      : this.setState({ no: !this.state.no });
  }

  render() {
    return (
      <div>
        <h3>Would you recommend this product?</h3>
        <form>
          <div className='radio'>
            <label>
              <input
                onClick={(e) => this.checked(e.target.value)}
                type='radio'
                value='yes'
                name='recommended'
                checked={this.state.yes}
              />
              Yes
            </label>
          </div>
          <div className='radio'>
            <label>
              <input
                onClick={(e) => this.checked(e.target.value)}
                type='radio'
                value='no'
                name='recommended'
                checked={this.state.no}
              />
              No
            </label>
          </div>
        </form>
      </div>
    );
  }
}
