import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Flex, Box } from 'grid-styled';
import {Button} from 'react-bootstrap';


// Assets
import MatchForm from './assets/MatchForm';
import SelectRole from './assets/SelectRole';
import SelectIndustry from './assets/SelectIndustry';
import SelectFunding from './assets/SelectFunding';
import MatchResult from './assets/MatchResult';


class MatchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRole: '',
            selectedIndustry: new Set([]),
            selectedDetail: '',
            selectedFunding: '',
            showResult: false
        };

        this.updateFlow = this.updateFlow.bind(this);
        this.toggleResult = this.toggleResult.bind(this);

        // this.handleTestChildSubmit = this.handleTestChildSubmit.bind(this);
    }

    // handleTestChildSubmit(data){
    //   this.setState({
    //       text2: data.text2
    //   });

    // }

    updateFlow(pair){
        console.log('pair is', pair)
        this.setState(pair)
    };

    toggleResult(){
        this.setState({showResult: true})
    }



    render() {
        return (
            <Flex justifyContent='center' flexWrap='wrap'>
                < SelectRole updateFlow={this.updateFlow}/>
                {(this.state.selectedRole != '') && < SelectIndustry updateFlow={this.updateFlow}/>}
                {(this.state.selectedIndustry.size > 0) && < SelectFunding updateFlow={this.updateFlow}/>}
                {(this.state.selectedFunding != '') &&
                    (this.state.showResult ? (< MatchResult params={this.state}/>)
                    : (<Button style={{marginTop: '20px', backgroundColor: '#9FD356', color: '#59565F'}} onClick={this.toggleResult}><h2>Match Me</h2></Button>)
                )}
            </Flex>
        );
    }
}

/* Below, registering is a filler. It modifies a state that is irrelevant to your
component. Here, though, can you use mapStateToProps accordingly.*/
function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedMatchPage = connect(mapStateToProps)(MatchPage);
export { connectedMatchPage as MatchPage };
