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
import '../index.css';
import { Row, Col, Image, Panel, Glyphicon } from 'react-bootstrap';

const mapStateToProps = state =>
  createStructuredSelector({
    searchTerm: selectBoxText
  });

export class CompanyResult extends React.Component {
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
        <div className="flex-grid">
          <div className="fifth">
            <Image src={data.logo_url} responsive thumbnail />
          </div>
          <div className="half">
            <h1>{this.props.vcs[0].company_name}</h1>
          </div>
          <div className="fifth center">
            <Glyphicon glyph="user" />
          </div>
        </div>
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
)(CompanyResult);
