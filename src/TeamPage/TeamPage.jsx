import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

// Assets

import Shangyan from './assets/images/shangyan.jpg';
import Maddy from './assets/images/maddy.jpg';
import Theresa from './assets/images/theresa.jpg';
import Mohib from './assets/images/mohib.jpg';
import Zia from './assets/images/zia.jpg';
import Myungin from './assets/images/myungin.jpg';
import './assets/styles.css';


class TeamPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div id="main">
                    <div className="title">
                        <h1>We are your <br/><strong><em>Friends & Family</em></strong>.</h1>
                    </div>

                    <div className="about">
                        <h6>We connect you early because we appreciate and promote the individuals who deserve help.</h6>
                        <h6>From day zero, we focus on your strengths and find the right people to back you.</h6>
                    </div>
                </div>

                <div className="images">
                    <div>
                        <img id="onHover" className="headshot-bio" src={Zia}/>
                        <img id="onHover" className="headshot-bio" src={Theresa}/>
                        <img id="onHover" className="headshot-bio" src={Shangyan}/>
                    </div>
                    <div>
                        <img id="onHover" className="headshot-bio" src={Myungin}/>
                        <img id="onHover" className="headshot-bio" src={Mohib}/>
                        <img id="onHover" className="headshot-bio" src={Maddy}/>
                    </div>
                </div>

                <div className="footer">Handshake 2018</div>
            </div>
        )
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

const connectedTeamPage = connect(mapStateToProps)(TeamPage);
export { connectedTeamPage as TeamPage };
