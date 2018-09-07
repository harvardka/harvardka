import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import {Box, Flex, Column, Row} from 'rebass';

// Assets
import '../_constants/styles.css';
import './assets/styles.css';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='about_main'>
                <div className='about_space'>
                    <div className='about_header'><h1> Our <strong>Purpose.</strong> </h1></div>
                    <div className='H3'> We are a<strong><em> family</em></strong> bound by common love for Korean culture. </div>
                </div>
                <div>
                    {/* <div className='divider' /> */}
                </div>
                <div className='flag'>
                    <Row>
                        <Column width={1/3}></Column>

                        <Column width={2/3}>
                            <div className='H4'>
                                <em>Culture binds us, gives us meaning and <br />
                                provides with foundation...it surrounds, <br />
                                entangles and supports our daily life, a <br />
                                matter of learning "what is is we have <br />
                                to know" to belong within a family <br />
                                and community.</em>
                                <br />
                                <strong>David Mas Masumoto</strong>
                                <br />
                            </div>
                        </Column>
                    </Row>
                    <Row>
                        <Column width={4/7}>
                            <div className='H4'>
                                Most of us belong to a variety of communities- <br />
                                both communities of place and communities of spirit. <br />
                                <br />
                                Community is not just where you live. <br />
                                Community is also about who you are. <br />
                                <br />
                                Forming a community is a process. <br />
                                It takes hard work and commitment. <br />
                                Community is where your heart is. <br />
                                <br />
                                The Korean Association community <br />
                                is made up of people <br />
                                who identify with each other <br />
                                on the basis of shared interest <br />
                                and common experience in the Harvard campus. <br />
                                <br />
                                We are on common ground with all students, <br />
                                with all peoples. <br />
                                <br />
                            </div>
                        </Column>

                        <Column width={3/7}></Column>
                    </Row>
                </div>
                <div className='header_footer' />
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

const connectedAboutPage = connect(mapStateToProps)(AboutPage);
export { connectedAboutPage as AboutPage };
