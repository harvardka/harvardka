import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Box, Flex, Column, Row} from 'rebass';
import { Image } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

import EAButton from './assets/EAButton';
import './assets/styles.css';
import {AboutPage} from '../AboutPage';
import {EventsPage} from '../EventsPage';
import {TeamPage} from '../TeamPage';
import {ContactPage} from '../ContactPage';

import {DramaPage} from '../DramaPage';
import {MusicPage} from '../MusicPage';
import {EducationPage} from '../EducationPage';

import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
// import FadeContainer from './assets/FadeContainer';


class HomePage extends React.Component {
    constructor(props){
        super(props);
        configureAnchors({offset: -80})
    }
    render() {
        return (
            <div>
                {/* < FadeContainer /> */}
                <ScrollableAnchor id={'home'}>
                    <div>

                        <Row>
                            <Column width={3/5}>
                                <div className='copy'><strong>Korean culture.</strong> <br />
                                <strong>Now for everyone. You too.</strong></div>
                            
                                <div className='additional'>HKA is a welcoming family for all races, genders, <br />and sexual orientations.</div>
                                {/* <br /> */}

                                <div className='button'>
                                  <EAButton id='button' />
                                </div>
                            </Column>
                            
                            <Column width={2/5}>
                                <div className='img'>
                                    <Motion
                                        defaultStyle={{ x: 4000, opacity: 0}}
                                        style= {{ x: spring(0), opacity: spring(1)}}
                                    >
                                        { style => (
                                            <Image
                                                responsive
                                                src={require('./assets/images/gangnam_style.png')}
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
                {/* <ScrollableAnchor id={'about'}>
                    <div>
                        < AboutPage />
                    </div>
                </ScrollableAnchor> */}
                <ScrollableAnchor id={'events'}>
                    <div>
                        < EventsPage />
                    </div>
                </ScrollableAnchor>
                {/* <ScrollableAnchor id={'team'}>
                    <div>
                        < TeamPage />
                    </div>
                </ScrollableAnchor> */}
                {/* <ScrollableAnchor id={'contact'}>
                    <div>
                        < ContactPage />
                    </div>
                </ScrollableAnchor> */}
                <ScrollableAnchor>
                    <div>
                        <DramaPage />
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor>
                    <div>
                        <MusicPage />
                    </div>
                </ScrollableAnchor>

                <ScrollableAnchor>
                    <div>
                        <EducationPage />
                    </div>
                </ScrollableAnchor>
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
