import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import CompanyResult from './CompanyResult';
import CreateForm from './CreateForm';
// import Graph from "../../components/Graph"

import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Panel,
  Form
} from 'react-bootstrap';

const LinkInput = props => (
  <FormGroup controlId="formBasicText">
    <Col md={6}>
      <ControlLabel>{props.link} Link</ControlLabel>
    </Col>
    <Col md={6}>
      <FormControl value="" type="text" placeholder="Enter text" />
    </Col>
  </FormGroup>
);

export default LinkInput;
