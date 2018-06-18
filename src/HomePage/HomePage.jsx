import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Box, Flex, Column, Row} from 'rebass';
import { Image } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

import EAButton from './assets/EAButton';
import './assets/styles.css';
import {TeamPage} from '../TeamPage/';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import FadeContainer from './assets/FadeContainer';


class HomePage extends React.Component {
    constructor(props){
        super(props);
        configureAnchors({offset: -80})
    }
    render() {
        return (
            <div>
                < FadeContainer />
                <ScrollableAnchor id={'home'}>
                    <div>
                        <div className='h5'>Handshake is coming to you.</div>
                        <div className='h1'>The simplest way to <br/> get connected, made for you</div>
                        <br />
                        <Row>
                            <Column width={1/3}>
                                <div className='button'>
                                  <EAButton id='button' />
                                </div>
                            </Column>
                            <Column width={2/3}>
                                <div className='img'>
                                    <Motion
                                        defaultStyle={{ x: 4000, opacity: 0}}
                                        style= {{ x: spring(0), opacity: spring(1)}}
                                    >
                                        { style => (
                                            <Image
                                                responsive
                                                src={require('./assets/temp.jpg')}
                                                width="100%"
                                                style={{
                                                    transform: `translate(${style.x}px)`,
                                                    opacity: style.opacity
                                                }}
                                            />
                                        )

                                        }

                                    </Motion>
                                </div>
                            </Column>

                        </Row>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'team'}>
                    <div>
                        < TeamPage />
                    </div>
                </ScrollableAnchor>
            </div>

                    </Row>
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
