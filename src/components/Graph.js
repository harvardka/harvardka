import React from "react"
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink, ForceGraphArrowLink } from 'react-vis-force';
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectVC, selectStartups, selectEdges, selectSearchTerm, selectQuery, fetchVisData } from "../modules/vis"
import Immutable from "immutable"

// apollo graphql
import { compose, graphql } from 'react-apollo'
import { someGraphQLQuery } from "../queries"

const mapStateToProps = createStructuredSelector({
    vcs:selectVC,
    startups: selectStartups,
    edges: selectEdges,
    searchTerm: selectSearchTerm,
    query: selectQuery

})


export class Graph extends React.Component{

    componentDidMount(){
        this.props.fetchVisData(this.props.query)
        // send the initial request to get data...
    }
    componentWillReceiveProps(nextProps){
        if (!Immutable.is(nextProps.query, this.props.query)){
            this.props.fetchVisData(nextProps.query)
            // send another requst to get data
        }
    }
    render(){
    const { vcs, startups, edges, searchTerm } = this.props
    return (<InteractiveForceGraph
        highlightDependencies
        simulationOptions={{ height: 600, width: 600, animate: true }}
        onSelectNode={() => console.log("herp!")}
        onDeselectNode={() => console.log("Schmerp!")}
    >
        {
            vcs
                .filter(vc => vc.indexOf(searchTerm) != -1)
                .map(vc => <ForceGraphNode zoomable key={vc} node={{id: vc, radius: 10}} fill="purple"/> )
        }
        {
            startups
                .filter(startup => startup.indexOf(searchTerm) != -1)
                .map(startup => <ForceGraphNode zoomable key={startup} node={{id: startup, radius: 10}} fill="grey"/> ) }

        {
            edges
                .filter(edge => edge.vc.indexOf(searchTerm) != -1 && edge.startup.indexOf(searchTerm) != -1)
                .map(edge => <ForceGraphArrowLink zoomable key={edge.vc.concat(edge.startup)} link={{ source: edge.vc, target: edge.startup}}/> )}
    </InteractiveForceGraph>)
    }
}

export default connect(mapStateToProps, { fetchVisData})(Graph)


// then, to use apollo you would do
/*
export default compose(
    graphql(someGrahpQlQuery, {...options}),
    ...queries
    connect(mapStateToProps, mapDispatchToProps)
)(Graph)
 */