import React from 'react';
import { connect } from 'react-redux';
import {Box, Flex, Column, Row} from 'rebass';

import './assets/styles.css';

class ContactPage extends React.Component {
    render() {
        return (
            <div className='contact_main'>
                <Row className='row'>
                    <Column width={2/7} className='vertical'> 
                        <em>hello.</em> <br />
                        <em>hola.</em> <br />
                        <em>salut.</em> <br />
                        <em>你好吗.</em> <br />
                        <em>bonjour.</em> <br />
                        <em>안녕하세요.</em> <br />

                        <br />
                        <br />

                        {/* <div className='closing_line'>hit us up.</div> */}
                    </Column>
                    {/* <Column width={1/7} className='blank'></Column> */}
                    <Column width={1/7} className='email'> email 
                        <a className='email_link' href="mailto:​harvardkaofficial@gmail.com"></a> 
                    </Column>
                    <Column width={1/7} className='facebook'>facebook
                        <a className='facebook_link' href="https://www.facebook.com/harvardkoreanassociation/?fb_dtsg_ag=AdzO_SwtG42AFqzoPqXrB4FSWtQ7TUqLDQX8GdmC3OPQXA%3AAdw-aHaVBm2ZKfp0wioLONJyMGjCJy1AkAUFi5HDokswPw"></a> 
                    </Column>
                    <Column width={1/7} className='instagram'> instagram 
                        <a className='instagram_link' href="https://www.instagram.com/lee.abraham/"></a> 
                    </Column>
                    <Column width={1/7} className='address'> address 
                        <a className='address_link' href=""></a> 
                    </Column>
                    <Column width={1/7} className='pleasure'> entertainment 
                        <a className='pleasure_link' href=""></a> 
                    </Column>
                </Row>
                {/* put icons for email, instagram, and facebook (maybe facebook client?) */}
                {/* signups for coffee chats */}
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

const connectedContactPage = connect(mapStateToProps)(ContactPage);
export { connectedContactPage as ContactPage };