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

class Card extends React.Component {
    render() {
      return(
          <div className="container1">
            <img src={this.props.src} alt="Avatar" className="image" />
            <div className="overlay">
              <div className="text">{this.props.name} <br/> <em>{this.props.role}</em></div>
            </div>
          </div>
      )
    }
}

class TeamPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {/* REMOVED B/C THIS IS NOT DIRECTLY TEAM RELATED.
                <div id="main">
                    <div className="title">
                        <h1>We are your <br/><strong><em>Friends & Family</em></strong>.</h1>
                    </div>

                    <div className="about">
                        <h6>We connect you early because we appreciate and promote the individuals who deserve help.</h6>
                        <h6>From day zero, we focus on your strengths and find the right people to back you.</h6>
                    </div>
                </div>*/}
                <div className='h2'>Meet the team.</div>
                <div className="images">
                  <div>
                    <Card src={Zia} name="Zia Haider Rahman" role="Vision"/>
                    <Card src={Theresa} name="Theresa Nguyen" role="Design"/>
                    <Card src={Shangyan} name="Shangyan Li" role="Back End"/>
                  </div>
                  <div>
                    <Card src={Myungin} name="Myungin Lee" role="Business"/>
                    <Card src={Mohib} name="Mohib Jafri" role="Product"/>
                    <Card src={Maddy} name="Maddy Nakada" role="Front End"/>
                  </div>
                </div>

                <br />
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
