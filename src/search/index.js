import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../home/counter';
import SearchBar from '../organization-info/SearchBar';
import SearchButtonGroup from '../graph/SearchButtonGroup';
import Card from './Card';
// import Graph from "../../components/Graph"

import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Grid
} from 'react-bootstrap';

import FilterNavigation from '../graph/FilterNavigation';
import CompanyFilterGroup from '../graph/CompanyFilterGroup';

const Search = props => (
  <Grid>
    <Row>
      <SearchBar />
    </Row>
    <Row>
      <Card />
    </Row>
  </Grid>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
