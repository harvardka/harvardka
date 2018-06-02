import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from './counter';

import SearchBar from '../organization-info/SearchBar';
import SearchButtonGroup from '../graph/SearchButtonGroup';
import Graph from '../graph/Graph';

import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import FilterNavigation from '../graph/FilterNavigation';
import CompanyFilterGroup from '../graph/CompanyFilterGroup';

const Home = props => (
  <Row>
    <Col md={12}>
      <Row>
        <Col md={12}>
          <h1>Uneaux</h1>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Graph />
        </Col>
        <Col md={4}>
          <FilterNavigation />
          <CompanyFilterGroup />
        </Col>
      </Row>
      <Row>
        <Col md={8} />
      </Row>
      {/*-- Dumb stuff from the boilerplate --
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>
        Increment
      </button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>*/}
    </Col>
  </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
