import React from "react"
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap"

import { updateSearchTerm, selectSearchTerm } from "../modules/vis.js"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const mapStateToProps = createStructuredSelector({
  searchTerm: selectSearchTerm
})

// value={this.state.value}
// onChange={this.handleChange}
const SearchBar = ({ searchTerm, updateSearchTerm }) =>
    <FormGroup
        controlId="formBasicText"
    >
          <ControlLabel>Search for VC's and startups</ControlLabel>
          <FormControl
            value={searchTerm}
            type="text"
            placeholder="Enter text"
            onChange={(e) => updateSearchTerm(e.target.value)}
          />
    </FormGroup>

export default connect(mapStateToProps, { updateSearchTerm })(SearchBar)