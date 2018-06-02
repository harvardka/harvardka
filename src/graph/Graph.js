import React from 'react';
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink,
  ForceGraphArrowLink
} from 'react-vis-force';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectVC,
  selectStartups,
  selectEdges,
  selectSearchTerm,
  selectQuery,
  fetchVisData,
  updateVisData
} from './vis';
import Immutable from 'immutable';
import { withHandlers } from 'recompose';

// apollo graphql
import { compose, graphql } from 'react-apollo';
import { someGraphQLQuery, getMain } from '../organization-info/queries';

const mapStateToProps = createStructuredSelector({
  vcs: selectVC,
  startups: selectStartups,
  edges: selectEdges,
  searchTerm: selectSearchTerm,
  query: selectQuery
});

// const mapDispatchToProps = dispatch => {
//   // console.log('data is ', props);
//   return {
//     // updateVisData,
//     updateVisData,
//     fetchVisData
//   };
// };

export class Graph extends React.Component {
  componentDidMount() {
    // this.props.fetchVisData();
    // send the initial request to get data...
  }
  componentWillReceiveProps(nextProps) {
    if (!Immutable.is(nextProps.query, this.props.query)) {
      this.props.fetchVisData(nextProps.query);
      // send another requst to get data
    }
  }
  render() {
    console.log('I AM HERE', this.props);
    // if(this.props.startups){
    //     console.log('companies', this.props.startups[0]['acquired'])
    // }
    const { vcs, startups, searchTerm } = this.props;
    if (vcs && this.props.loading == false) {
      console.log('world', vcs, startups[0]['acquired']);

      const edges = startups[0]['acquired'].map(x => {
        var obj = {};
        obj['vc'] = vcs[0].company_name;
        obj['startup'] = x;
        return obj;
      });
      console.log('edges are', edges);
      return (
        <InteractiveForceGraph
          highlightDependencies
          simulationOptions={{ height: 600, width: 600, animate: true }}
          onSelectNode={() => console.log('herp!')}
          onDeselectNode={() => console.log('Schmerp!')}>
          {vcs
            // .filter(vc => vc.indexOf(searchTerm) != -1)
            .map(vc => (
              // console.log(vc.company_name),
              <ForceGraphNode
                zoomable
                key={vc.company_name}
                node={{ id: vc.company_name, radius: 10 }}
                fill="purple"
              />
            ))}
          {startups[0]['acquired']
            // .filter(startup => startup.indexOf(searchTerm) != -1)
            .map(startup => (
              // console.log(startup.company_name),
              <ForceGraphNode
                zoomable
                key={startup.company_name}
                node={{ id: startup.company_name, radius: 10 }}
                fill="grey"
              />
            ))}

          {edges
            // .filter(
            //   edge =>
            //     edge.vc.indexOf(searchTerm) != -1 &&
            //     edge.startup.indexOf(searchTerm) != -1
            // )
            .map(
              edge => (
                console.log(edge),
                (
                  <ForceGraphArrowLink
                    zoomable
                    key={edge.vc.concat(edge.startup.company_name)}
                    link={{
                      source: edge.vc,
                      target: edge.startup.company_name
                    }}
                  />
                )
              )
            )}
        </InteractiveForceGraph>
      );
    } else {
      return null;
    }
  }
}

// export default connect(mapStateToProps, { fetchVisData})(Graph)

// then, to use apollo you would do
// EVENTUALLY WANT TO INJECT QUERY AND OR VARS FROM PROPS
export default compose(
  graphql(getMain, {
    props: ({ data: { loading, Organization } }) => ({
      vcs: Organization,
      loading: loading
    }),
    options: {
      variables: {
        company_name: 'Apple'
      }
    }
  }),
  graphql(someGraphQLQuery, {
    props: ({ data: { loading, Organization } }) => ({
      startups: Organization,
      loading: loading
    }),
    options: {
      variables: {
        company_name: 'Apple'
      }
    }
  })
  // connect(mapStateToProps, { fetchVisData }),
  // withHandlers({
  //   fetchVisData: props => nodes => {
  //       console.log('maddy ', props.fetchVisData(nodes));
  //   }
  // })
)(Graph);

/*
export default compose(
    graphql(someGrahpQlQuery, {...options}),
    ...queries
    connect(mapStateToProps, mapDispatchToProps)
)(Graph)
 */
