import React from 'react';
import { connect } from 'react-redux';
import { Column, Row } from 'rebass';

import History from './assets/images/history.jpg';
import Word from './assets/images/word.jpg';
import Chaebol from './assets/images/chaebol.jpg';
import Dating from './assets/images/dating.jpg';
import News from './assets/images/news.jpg';
import Politics from './assets/images/politics.jpg';
import Bucketlist from './assets/images/bucketlist.jpg';
import Northsouth from './assets/images/northsouth.jpg';

import './assets/styles.css'

class EducationPage extends React.Component {
    render() {
        return (
            <div>
                <div className='education_header'> korean culture starter-kit </div>
                <div className='education_subheader'> explore the links to get familiarized with Korea </div>
                <Row>
                    <Column width={1/4}><a href="https://asiasociety.org/education/korean-history-and-political-geography"><img className='education_img' src={History} /></a>
                        <div className='img_text'>History</div>
                        <div className='img_subtext'>Learn general Korean history, stretching before the civil war in the early 1950s, to see how South Korea became one of the most influential East Asian countries.</div>
                    </Column>
                    <Column width={1/4}><a href="https://www.fluentu.com/blog/korean/korean-travel-phrases/"><img className='education_img' src={Word} /></a>
                        <div className='img_text'>Essential Korean words</div>
                        <div className='img_subtext'>Find words that will help you navigate the streets of Korea or a Korean restaurant in Boston.</div>
                    </Column>
                    <Column width={1/4}><a href="https://www.nytimes.com/2017/02/17/business/south-korea-chaebol-samsung.html"><img className='education_img' src={Chaebol} /></a>
                        <div className='img_text'>Chaebol?</div>
                        <div className='img_subtext'>Find out what exactly is a chaebol and their general influence economically and socially.</div>
                    </Column>
                    <Column width={1/4}><a href="https://www.10mag.com/8-cultural-differences-expect-dating-korea/"><img className='education_img' src={Dating} /></a>
                        <div className='img_text'>Dating culture</div>
                        <div className='img_subtext'>Find out what you're getting yourself into should your next significant other be Korean.</div>
                    </Column>
                </Row>
                <Row>
                    <Column width={1/4}><a href="http://www.koreatimes.co.kr/www2/index.asp"><img className='education_img' src={News} /></a>
                        <div className='img_text'>News</div>
                        <div className='img_subtext'></div>
                    </Column>
                    <Column width={1/4}><a href="https://thediplomat.com/tag/south-korean-politics/"><img className='education_img' src={Politics} /></a>
                        <div className='img_text'>Politics</div>
                        <div className='img_subtext'></div>
                    </Column>
                    <Column width={1/4}><a href="http://www.aussieontheroad.com/south-korea-bucket-list-40-things-to-do-in-south-korea/"><img className='education_img' src={Bucketlist} /></a>
                        <div className='img_text'>Korea Bucketlist</div>
                        <div className='img_subtext'></div>
                    </Column>
                    <Column width={1/4}><a href="https://www.nytimes.com/2018/04/27/world/asia/north-korea-south-kim-jong-un.html"><img className='education_img' src={Northsouth} /></a>
                        <div className='img_text'>North/South</div>
                        <div className='img_subtext'></div>
                    </Column>
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

const connectedEducationPage = connect(mapStateToProps)(EducationPage);
export { connectedEducationPage as EducationPage };