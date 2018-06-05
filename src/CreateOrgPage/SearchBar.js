import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { updateBoxText, selectSearchTerm, updateSearchTerm } from './search.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

// value={this.state.value}
// onChange={this.handleChange}
const SearchBar = ({ searchTerm, updateSearchTerm, updateBoxText }) => (
  <FormGroup controlId="formBasicText">
    <ControlLabel>Search for VC's</ControlLabel>
    <FormControl
      value={searchTerm}
      type="text"
      placeholder="Enter text"
      onKeyPress={event => {
        if (event.key === 'Enter') {
          updateBoxText(searchTerm);
        }
      }}
      onChange={e => updateSearchTerm(e.target.value)}
    />
  </FormGroup>
);

export default connect(mapStateToProps, { updateSearchTerm, updateBoxText })(
  SearchBar
);
