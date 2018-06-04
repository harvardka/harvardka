import React from 'react';
import { compose, graphql } from 'react-apollo';
import { someGraphQLQuery, getMain } from './queries';
import { selectBoxText, updateSearchTerm, selectSearchTerm } from './search.js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import '../common/index.css';
import { Button, Row, Col, Image, Panel, Glyphicon } from 'react-bootstrap';

const mapStateToProps = state => {
  return { searchTerm: state.search.get('searchTerm') };
};

export class CompanyResult extends React.Component {
  // shouldComponentUpdate(nextProps){
  //   const differentSearch = this.props.company_name !== nextProps.company_name;
  //   return differentSearch
  // }

  render() {
    console.log('PROPS ARE', this.props);
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
        <Panel style={{ width: '100%' }}>
          <div className="flex-grid" style={{ padding: '15px' }}>
            <div className="fifth">
              <Image src={data.logo_url} responsive thumbnail />
            </div>
            <div className="half">
              <h1>{this.props.vcs[0].company_name}</h1>
            </div>
            <div className="fifth center">
              <Button bsStyle="success">Join</Button>
            </div>
          </div>
        </Panel>
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
