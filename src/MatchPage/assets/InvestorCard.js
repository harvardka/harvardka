import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';
import { Flex, Box } from 'grid-styled'

// assets


class SelectRole extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selected: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.launchModal = this.launchModal.bind(this)
    }

    handleSelect(label){
        console.log(label)
        this.setState({ selected: label });
        this.props.updateFlow({selectedRole: label})
    }

    launchModal(){
        this.props.toggleModal(this.props.investor);
    }

    render(){
        const investor = this.props.investor;
        return(
            <Box onClick={this.launchModal} width = {[1/3,1/4,1/5]} px={3} m={10} style={{backgroundColor: 'white',  borderRadius: '5px', border: '1px solid #9FD356', cursor: 'pointer'}}>
                <h3><img src={investor.logoUrl} style={{width: '100%', marginBottom: '2px'}}/>{investor.companyName}</h3>
                <ul>
                    <li>Total Funding: {investor.fundingTotalUsd}</li>
                    <li>Investment Count: {investor.investmentCount}</li>
                    <li>City: {investor.city}</li>
                </ul>
            </Box>

        )
    }
}

export default SelectRole;
