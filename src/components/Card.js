import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { compose, graphql } from 'react-apollo';
import { someGraphQLQuery, getMain } from '../queries';
import {
  selectBoxText,
  updateSearchTerm,
  fetchSearchTerm
} from '../modules/vis.js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { Row, Col, Image, Panel } from 'react-bootstrap';

const mapStateToProps = state =>
  createStructuredSelector({
    searchTerm: selectBoxText
  });

export class Card extends React.Component {
  // shouldComponentUpdate(nextProps){
  //   const differentSearch = this.props.company_name !== nextProps.company_name;
  //   return differentSearch
  // }

  render() {
    console.log('search is', this.props, this.props.searchTerm);
    if (
      this.props.vcs &&
      this.props.vcs.length > 0 &&
      this.props.loading == false
    ) {
      var data = this.props.vcs[0];
      var people = data['affiliatedTo'].map(person => (
        <li key={person.first_name.concat(person.last_name)}>
          {person.first_name} {person.last_name}
        </li>
      ));
      console.log('props are', this.props);

      return (
        <Col>
          <Row>
            <Col md={2}>
              <Image src={data.logo_url} responsive thumbnail />
            </Col>
            <Col md={6}>
              <h1>{this.props.vcs[0].company_name}</h1>
            </Col>
            <Col>
              <Row>
                <Col>Fast Facts</Col>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>Founded On: {data.founded_on}</li>
                    <li>Last Funding Data: {data.last_funding_on}</li>
                    <li>Total Funding: {data.funding_total_usd}</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Panel>{data.description}</Panel>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h3>Key People</h3>
              <ul>{people}</ul>
            </Col>
            <Col md={4} />
            <Col md={4}>
              <ul>
                <li>{data.email}</li>
                <li>{data.phone}</li>
                <li>{data.facebook_url}</li>
                <li>{data.linkedin_url}</li>
              </ul>
            </Col>
          </Row>
        </Col>
      );
    } else {
      return null;
    }
  }
}

export default compose(
  connect(mapStateToProps, { updateSearchTerm }),

  graphql(getMain, {
    props: ({ data: { loading, Organization } }) => ({
      vcs: Organization,
      loading: loading
    }),
    options: props => ({
      variables: {
        company_name: props.searchTerm
      }
    })
  })
)(Card);
