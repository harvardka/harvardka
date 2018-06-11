import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

// Assets
import TestChild from './assets/TestChild';


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
        var firstName;
        // If user is logged in, we'll get their first name.
        if (this.props.user){
            firstName = this.props.user.firstName;
        }
        else {
            firstName = "Login for first name";
        }

        return (
            <div>

                <div className="col-md-6 col-md-offset-3">
                    <h2>{ firstName }</h2>
                    <div>
                        <p>Button 1 increments this number: { this.state.text1} </p>
                        <button onClick={ this.handleB1 }>Button1: Change a TestPage state from TestPage.</button>
                    </div>
                    <br/><br/><br/>

                    <div>
                        <p>Button 2 changes this text: {this.state.text2}</p>
                        < TestChild text3 = { this.state.text3 } handleTestChildSubmit = {this.handleTestChildSubmit} / >
                    </div>
                </div>
            </div>
        );
    }
}

/* Below, mapStateToProps is what will get our global store variables to be accessible here.
    With this, you can now access this.props.user.firstName, for example.
.*/
function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedTestPage = connect(mapStateToProps)(TestPage);
export { connectedTestPage as TestPage };
