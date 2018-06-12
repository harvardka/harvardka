import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';
import { Flex, Box } from 'grid-styled'

// assets
import MatchSelector from './MatchSelector';


class SelectRole extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selected: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
    }


    handleSelect(label){
        console.log(label)
        this.setState({ selected: label });
        this.props.updateFlow({selectedRole: label})
    }

    render(){
        console.log('mid', this.props);
        return(
                <Box width={1}>
                <div className='text-center'>
                  <h2>What are you looking for?</h2>
                </div>
                    <Flex justifyContent='center'>

                        <Box width={1/2}>
                            <Flex justifyContent='space-between'>
                                < MatchSelector label='Investor' size='lg' handleSelect={this.handleSelect} selected={this.state.selected}/>
                                < MatchSelector label='Hire' size='lg' handleSelect={this.handleSelect}  selected={this.state.selected}/>
                                < MatchSelector label='Advisor' size='lg' handleSelect={this.handleSelect}  selected={this.state.selected}/>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>

        )
    }
}

export default SelectRole;
