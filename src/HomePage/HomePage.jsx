import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Box, Flex, Column, Row} from 'rebass';
import { Image } from 'react-bootstrap';

import Button from './assets/Button';
import './assets/styles.css';


class HomePage extends React.Component {
    render() {
        return (
          <div>
              <div className='h5'>Friends & Family is coming to Boston</div>
              <div className='h1'>The simplest way to <br/> get connected, made for you</div>
              <br />
                <Row>
                    <Column width={1/3}>
                        <div className='button'>
                          <Button id='button' />
                        </div>
                    </Column>
                    <Column width={2/3}>
                        <div className='img'>
                            <Image responsive src={require('./assets/temp.jpg')} width="100%"/>
                        </div>
                    </Column>

                </Row>
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
