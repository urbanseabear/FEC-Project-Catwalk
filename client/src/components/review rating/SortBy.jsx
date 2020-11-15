import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class SortBy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputLabel style={{ fontSize: '30px' }} id='label'>
          Sort By
        </InputLabel>
        <Select
          style={{ width: '60%' }}
          labelId='label'
          id='select'
          value='Relevance'>
          <MenuItem value='10'>Style</MenuItem>
          <MenuItem value='20'>Fit</MenuItem>
          <MenuItem value='10'>Size</MenuItem>
          <MenuItem value='20'>Price</MenuItem>
        </Select>
      </div>
    );
  }
}
