import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


class TextInput extends Component {
  
  render() {
    return (
      <FormGroup
          controlId={this.props.id}
      >
      <FormControl type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            bsSize='small'
      />

      </FormGroup>
    )
  }
}

export default TextInput;
