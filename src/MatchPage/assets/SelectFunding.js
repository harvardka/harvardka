import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';
import { Flex, Box } from 'grid-styled'

// assets
import MatchSelector from './MatchSelector';

const rounds = [
    "series_a",
    "series_b",
    "series_c",
    "series_d",
    "series_e",
    "seed"
]

class SelectFunding extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selected: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(label){
        this.setState({ selected: label });
        this.props.updateFlow({selectedFunding: label})
    }

    render(){
        return(
                // <Box width={1}>
                //
                //     <Flex justifyContent='center'>
                //         <Box width={1/2}>
                //             <Flex justifyContent='space-between'>
                //                 < MatchSelector label='Investor' size='lg'/>
                //                 < MatchSelector label='Hire' size='lg'/>
                //                 < MatchSelector label='Advisor' size='lg'/>
                //             </Flex>
                //         </Box>
                //     </Flex>
                // </Box>
            <Box width={1}>
                <h2>What is your funding round?</h2>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    {rounds.map((round) =>
                        < MatchSelector key={round} label={round} size='sm' handleSelect={this.handleSelect} selected={this.state.selected}/>
                    )}
                </Flex>
            </Box>
        )
    }
}

export default SelectFunding;
