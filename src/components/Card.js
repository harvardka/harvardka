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
        <li>
          {person.first_name} {person.last_name}
        </li>
      ));
      console.log('props are', this.props);

      return (
        <div>
          <h1>{this.props.vcs[0].company_name}</h1>
          <ul>{people}</ul>
          <ul>
            <li>{data.funding_total_usd}</li>
            <li>{data.last_funding_on}</li>
            <li>{data.founded_on}</li>
            <li>{data.email}</li>
            <li>{data.phone}</li>
            <li>{data.facebook_url}</li>
            <li>{data.linkedin_url}</li>
          </ul>
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
)(Card);
