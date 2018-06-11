import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';
import { Flex, Box } from 'grid-styled';
import { getInvestor } from '../queries.js'
import { compose, graphql } from 'react-apollo';

// assets
import InvestorCard from './InvestorCard'


class MatchResult extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };

        this.handleSelect = this.handleSelect.bind(this);
    }


    handleSelect(label){
        console.log(label)
        this.setState({ selected: label });
        this.props.updateFlow({selectedRole: label})
    }

    render(){
        console.log('my props are', this.props);
        const params = this.props.params
        if (!this.props.loading){
            return(
                    <Box width={1}>
                        <h1>Your Matches</h1>
                        <Flex justifyContent='space-between' flexWrap='wrap'>
                            {this.props.investors.map((investor) =>
                                < InvestorCard investor={investor} key={investor}/>
                            )}
                    </Flex>
                    </Box>

            )
        }else{
            return(<h1>Loading your results</h1>)
        }
    }
}

export default compose(
  graphql(getInvestor, {
    props: ({ data: { loading, Investor } }) => ({
      investors: Investor,
      loading: loading
    }),
    options: ownProps => (
    {
      variables: {
        industry: [...ownProps.params.selectedIndustry],
        rounds: ownProps.params.selectedFunding
      }
    })
  })
)(MatchResult);
