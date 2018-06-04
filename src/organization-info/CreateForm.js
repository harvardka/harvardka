import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import CompanyResult from './CompanyResult';
import LinkInput from './LinkInput';
// import Graph from "../../components/Graph"

import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Form
} from 'react-bootstrap';

const sources = ['Crunchbase', 'Pitchbook', 'LinkedIn'];

const CreateForm = props => (
  <Grid>
    <Row>
      <Form horizontal>
        {sources.map(source => <LinkInput link={source} />)}
      </Form>
    </Row>
  </Grid>
);

export default CreateForm;
