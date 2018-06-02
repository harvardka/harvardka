import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import CompanyResult from './CompanyResult';
// import Graph from "../../components/Graph"

import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid
} from 'react-bootstrap';

const JoinOrg = props => (
  <Grid>
    <Row>
      <SearchBar />
    </Row>
    <Row>
      <CompanyResult />
    </Row>
  </Grid>
);

export default JoinOrg;
