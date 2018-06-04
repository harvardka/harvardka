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

const CreateOrg = props => (
  <Grid>
    <Row>
      <Panel>Directions Here</Panel>
    </Row>
    <Row>
      <CreateForm />
    </Row>
  </Grid>
);

export default CreateOrg;
