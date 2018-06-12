import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from './assets/Button';
import './assets/styles.css';


class HomePage extends React.Component {
    render() {
        return (
            <div className='header'>
              {/* // USE z-index for BUTTON PLACEMENT */}
              <div className='h5'>Friends & Family is coming to Boston</div>
              <div className='h1'>The simplest way to <br/> get connected, made for you</div>

              <div className='work'>
                  <div className='img'>
                      <img src={require('./assets/temp.jpg')}/>
                  </div>

                  <div className='button'>
                      <Button id='button' />
                  </div>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
