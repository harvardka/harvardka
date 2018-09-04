import React from 'react';
import { connect } from 'react-redux';
import {Box, Flex, Column, Row} from 'rebass';

import './assets/styles.css';
import '../_constants/styles.css';

import StudentFair from './assets/images/student_fair.jpg';
import Party from './assets/images/party.jpg';
import MeetandGreet from './assets/images/board.jpg';
import Announcement from './assets/images/host.jpg';
import SibFam from './assets/images/sibfam.jpg';
import Elections from './assets/images/elections.jpg';


class EventsPage extends React.Component {
    render() {
        return (
            <div className='events_main'>
                <br />
                <div className='events_header'>
                    upcoming events
                </div>

                <Row>       
                    <Column width={1/2}>
                        <div>
                            <img src={StudentFair} alt="Avatar" className='events_img' />
                            <div className='events_description'>Sep. 7th 3-5pm: ​Student Involvement Fair</div>
                        </div>
                    </Column>

                    <Column width={1/2}>
                        <div>
                            <img src={Party} alt="Avatar" className='events_img' />
                            <div className='events_description'>Sep. 8th: ​Potentially co-host party with AAA</div>
                        </div>
                    </Column>
                </Row>

                <Row>
                    <Column width={1/2}>
                        <div>
                            <img src={MeetandGreet} alt="Avatar" className='events_img' />
                            <div className='events_description'>Sep. 9th: ​Intro get to know KA Board event</div>
                        </div>
                    </Column>
                
                    <Column width={1/2}>
                        <div>
                            <img src={Announcement} alt="Avatar" className='events_img' />
                            <div className='events_description'>Sep. 14th:​ Sibfam Assignments</div>
                        </div>
                    </Column>
                </Row>

                <Row>
                    <Column width={1/2}>
                        <div>
                            <img src={SibFam} alt="Avatar" className='events_img' />
                            <div className='events_description'>Sep. 21st/22nd: ​Sibfam kickoff</div>
                        </div>
                    </Column>
                
                    <Column width={1/2}>
                        <div>
                            <img src={Elections} alt="Avatar" className='events_img' />
                            <div className='events_description'>Sep. 23rd: ​Frosh rep elections</div>
                        </div>
                    </Column>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedEventsPage = connect(mapStateToProps)(EventsPage);
export { connectedEventsPage as EventsPage };