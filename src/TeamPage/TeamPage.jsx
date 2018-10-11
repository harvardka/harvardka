import React from 'react';
import { connect } from 'react-redux';

// Assets
import Abe from './assets/images/abe_v.jpg';
import Nicole from './assets/images/nicole_tzuyu.png';
import Joon from './assets/images/joon_top.jpg';
import Joyce from './assets/images/joyce_jenni.jpg';

import Jeeyoon from './assets/images/jeeyoon_nana.jpg';
import Andrew from './assets/images/andrew_kangjoon.jpg';
import Xilin from './assets/images/xilin_suzy.jpg';
import Myungin from './assets/images/myungin_kwangsoo.jpg';

import Chris from './assets/images/chris_woobin.jpg';
import Claire from './assets/images/claire_jiwon.jpg';
import Kenneth from './assets/images/kenneth_mino.jpg';
import Gayoung from './assets/images/gayoung_yoona.jpg';

import './assets/styles.css';

class Card extends React.Component {
    render() {
      return(
          <div className="container1">
            <img src={this.props.src} alt="Avatar" className="image" />
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

                <div className="main">
                
                    <div className="title">
                        <h1>We are your <strong><em>HKA Family</em></strong>.</h1>
                    </div>

                    <div className="about">
                        <h5>Each and every one of us appreciate all aspects of Korean culture and want to promote them around the Harvard campus.</h5>
                        <h5>We are dedicated to making you feel at home and encouraging your interest in Korea.</h5>
                    </div>

                </div>

                <div className="images">
                  <div>
                    <Card src={Abe} name="Abe Lee" role="Co-President"/>
                    <Card src={Nicole} name="Nicole Kim" role="Co-President"/>
                    <Card src={Joon} name="Joon Kim" role="Culture Chair"/>
                    <Card src={Joyce} name="Joyce Kang" role="Culture Chair"/>
                  </div>
                  <div>
                    <Card src={Jeeyoon} name="Jeeyoon Lee" role="Community Chair"/>
                    <Card src={Andrew} name="Andrew Lee" role="EduPol Chair"/>
                    <Card src={Xilin} name="Xilin Zhou" role="Pub Chair"/>
                    <Card src={Myungin} name="Myungin Lee" role="Tech Chair"/>
                  </div>
                  <div>
                    <Card src={Chris} name="Chris Cheon" role="Social Chair"/>
                    <Card src={Claire} name="Claire Spackman" role="Social Chair"/>
                    <Card src={Kenneth} name="Kenneth Kim" role="Finance Chair"/>
                    <Card src={Gayoung} name="Gayoung Choi" role="Finance Chair"/>
                  </div>
                </div>
                {/* <div className="footer">Harvard Korean American Association 2018 ©</div> */}
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
