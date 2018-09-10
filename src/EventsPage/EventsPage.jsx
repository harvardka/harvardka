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
            <div id='events_name' className='events_main'>
                <br />
                <div className='events_header'>
                    upcoming events
                </div>

                <Row>       
                    <Column width={1/2}>
                        <div>
                            <img src={StudentFair} alt="Avatar" className='events_img' />
                            <div className='events_description'>September 7, Friday, 3pm to 5pm · Student Involvement Fair</div>
                        </div>
                    </Column>
                    {/* <Column width={1/2}>
                        <div>
                            <img src={Party} alt="Avatar" className='events_img' />
                            <div className='events_description'>Sep. 8th: ​Potentially co-host party with AAA</div>
                        </div>
                    </Column> */}
                    <Column width={1/2}>
                        <div>
                            <img src={MeetandGreet} alt="Avatar" className='events_img' />
                            <div className='events_description'>September 9, Sunday, 7pm to 9pm · Meet and Greet</div>
                        </div>
                    </Column>
                </Row>
                <Row>
                    <Column width={1/2}>
                        <div>
                            <img src={Announcement} alt="Avatar" className='events_img' />
                            <div className='events_description'>September 14, Friday · Sibfam Assignments</div>
                        </div>
                    </Column>
                    <Column width={1/2}>
                        <div>
                            <img src={SibFam} alt="Avatar" className='events_img' />
                            <div className='events_description'>September 21, Friday · Sibfam Kickoff</div>
                        </div>
                    </Column>
                </Row>
                <Row>
                    <Column width={1/2}>
                        <div>
                            <img src={Elections} alt="Avatar" className='events_img' />
                            <div className='events_description'>September 23, Sunday · ​Frosh rep elections</div>
                        </div>
                    </Column>
                    <Column width={1/2}></Column>
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