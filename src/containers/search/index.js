import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';

import SearchBar from '../../components/SearchBar';
import SearchButtonGroup from '../../components/SearchButtonGroup';
import Card from '../../components/Card';
// import Graph from "../../components/Graph"

import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import FilterNavigation from '../../components/FilterNavigation';
import CompanyFilterGroup from '../../components/CompanyFilterGroup';

const Search = props => (
  <Col>
    <Row>
      <SearchBar />
    </Row>
    <Row>
      <Card />
    </Row>
  </Col>
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
