import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import styled from 'styled-components';


// Assets
import TestChild from './assets/TestChild';
import ProfileInfo from './assets/ProfileInfo';

const Div = styled.div`
    background-color: white;
    padding: 20px;
`;

class TestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text1: 0,
            text2: "Enter below to change a parent state from the child.",
            text3: "This variable was passed from parent to child"
        };

        this.handleB1 = this.handleB1.bind(this);
        this.handleTestChildSubmit = this.handleTestChildSubmit.bind(this);
    }

    handleTestChildSubmit(data){
      this.setState({
          text2: data.text2
      });

    }

    handleB1(event){
        event.preventDefault();

        this.setState({
            text1: this.state.text1 +1
        });

    }



    render() {

        return (
            <Div>
                <ProfileInfo />
                <h2>TestPage</h2>
                <div>
                    <p>Button 1 increments this number: { this.state.text1} </p>
                    <button onClick={ this.handleB1 }>Button1: Change a TestPage state from TestPage.</button>
                </div>
                <br/><br/><br/>

                <div>
                    <p>Button 2 changes this text: {this.state.text2}</p>
                    < TestChild text3 = { this.state.text3 } handleTestChildSubmit = {this.handleTestChildSubmit} / >
                </div>
            </Div>
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

const connectedTestPage = connect(mapStateToProps)(TestPage);
export { connectedTestPage as ProfilePage };
