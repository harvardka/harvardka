import React from 'react';
import { connect } from 'react-redux';
import { Column, Row } from 'rebass';

import Dramafever from './assets/images/dramafever.jpg';
import Dasiboda from './assets/images/dasiboda.png';
import Asiancrush from './assets/images/asiancrush.png';
import Kissasian from './assets/images/kissasian.jpg';

import './assets/styles.css'

class DramaPage extends React.Component {
    render() {
        return (
            <div>
                <div className='drama_header'>featured k-drama streaming websites</div>
                <div className='drama_subheader'>browse the newest shows all for free</div>
                <Row>
                    <Column width={1/4}><a href="https://www.dramafever.com/"><img className='drama_img' src={Dramafever} /></a>DRAMAFEVER</Column>
                    <Column width={1/4}><a href="https://dasiboda.pro/"><img className='drama_img' src={Dasiboda} /></a>DASIBODA</Column>
                    <Column width={1/4}><a href="https://www.asiancrush.com/browse/drama/korean/"><img className='drama_img' src={Asiancrush} /></a>ASIAN CRUSH</Column>
                    <Column width={1/4}><a href="https://kissasian.es/Country/South-Korea"><img className='drama_img' src={Kissasian} /></a>KISSASIAN</Column>
                </Row>
            </div>
        )
    }
};

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedDramaPage = connect(mapStateToProps)(DramaPage);
export { connectedDramaPage as DramaPage };