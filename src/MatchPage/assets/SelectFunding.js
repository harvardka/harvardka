import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MatchPage from '../MatchPage';
import { Flex, Box } from 'grid-styled'

// assets
import MatchSelector from './MatchSelector';

const rounds = [
    "Series A",
    "Series B",
    "Series C",
    "Series D",
    "Series E",
    "Seed"
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
        const stored_label = (label.toLowerCase()).replace(/ /g,"_");
        console.log('my label is', stored_label);
        this.setState({ selected: stored_label });
        this.props.updateFlow({selectedFunding: stored_label})
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
                <div className='text-center'>
                  <h2>What is your funding round?</h2>
                </div>
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
