import React from 'react';
import { connect } from 'react-redux';

// Assets
import Abe from './assets/images/abe_lee.jpg';
import Nicole from './assets/images/nicole_kim.jpg';
import Joon from './assets/images/joon_kim.jpg';
import Joyce from './assets/images/joyce_kang.jpg';

import Jeeyoon from './assets/images/jeeyoon_lee.jpg';
import Andrew from './assets/images/andrew_lee.jpg';
import Xilin from './assets/images/xilin_zhou.jpg';
import Myungin from './assets/images/myungin_lee.jpg';

import Chris from './assets/images/chris_cheon.jpg';
import Claire from './assets/images/claire_spackman.jpg';
import Kenneth from './assets/images/kenneth_kim.jpg';
import Gayoung from './assets/images/gayoung_choi.jpg';

import Calla from './assets/images/calla_bai.jpg';
import Ben from './assets/images/ben_chun.jpg';
import Sandra from './assets/images/sandra_moon.jpg';

import Presidents from './assets/images/presidents.jpg';
import CultureChairs from './assets/images/culture_chairs.jpg';
import FinanceChairs from './assets/images/finance_chairs.jpg';
import SocialChairs from './assets/images/social_chairs.jpg';
import FroshReps from './assets/images/frosh_reps.jpg';

import './assets/styles.css';

class Card extends React.Component {
    render() {
      return(
          <div>
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
                    
                    <div class='container1'>
                        <Card src={Presidents}/>
                    </div>
                    
                    <div class='container3'>
                        <Card src={Abe} name="Abe Lee" role="Co-President"/>
                    </div>
                    <div class='container3'>
                        <Card src={Nicole} name="Nicole Kim" role="Co-President"/>
                    </div>
                    <div class='container3'>
                        <Card src={Joyce} name="Joyce Kang" role="Culture Chair"/>
                    </div>
                    <div class='container3'>
                        <Card src={Joon} name="Joon Kim" role="Culture Chair"/>
                    </div>
                
                    <div class='container1'>
                        <Card src={FroshReps}/>
                    </div>
                    <div class='container1'>
                        <Card src={CultureChairs}/>
                    </div>
                    <div class='container2'>
                        <Card src={Calla} name="Calla Bai" role="Frosh Rep"/>
                    </div>
                    <div class='container2'>
                        <Card src={Ben} name="Ben Chun" role="Frosh Rep"/>
                    </div>
                    <div class='container2'>
                        <Card src={Sandra} name="Sandra Moon" role="Frosh Rep"/>
                    </div>
                    <div class='container1'>
                        <Card src={FroshReps}/>
                    </div>
                    <div class='container3'>
                        <Card src={Chris} name="Chris Cheon" role="Social Chair"/>
                    </div>
                    <div class='container3'>
                        <Card src={Claire} name="Claire Spackman" role="Social Chair"/>
                    </div>
                    <div class='container3'>
                        <Card src={Kenneth} name="Kenneth Kim" role="Finance Chair"/>
                    </div>
                    <div class='container3'>
                        <Card src={Gayoung} name="Gayoung Choi" role="Finance Chair"/>
                    </div>
                    <div class='container1'>
                        <Card src={Myungin} name="Myungin Lee" role="Tech Chair"/>
                    </div>
                    <div class='container1'>
                        <Card src={FinanceChairs}/>
                    </div>
                    <div class='container2'>
                        <Card src={Xilin} name="Xilin Zhou" role="Pub Chair"/>
                    </div>
                    <div class='container2'>
                        <Card src={Andrew} name="Andrew Lee" role="EduPol Chair"/>
                    </div>
                    <div class='container2'>
                        <Card src={Jeeyoon} name="Jeeyoon Lee" role="Community Chair"/>
                    </div>
                </div>
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
