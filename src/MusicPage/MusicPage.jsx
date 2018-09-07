import React from 'react';
import { connect } from 'react-redux';
import { Column, Row } from 'rebass';

import Bts from './assets/images/bts.jpg';
import Blackpink from './assets/images/blackpink.jpg';
import Bigbang from './assets/images/bigbang.jpg';
import Momoland from './assets/images/momoland.jpg';
import Crush from './assets/images/crush.jpg';
import Kimbumsoo from './assets/images/kimbumsoo.jpg';
import Zico from './assets/images/zico.png';
import Iu from './assets/images/iu.jpg';

import './assets/styles.css'

class MusicPage extends React.Component {
    render() {
        return (
            <div>
                <div className='music_header'>korean music in the spotlight</div>
                <Row>
                    <Column width={1/3}><a href="https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ"><img className='music_img' src={Bts} /></a>
                        <div className='music_text'>BTS · 방탄소년단</div>
                    </Column>
                    <Column width={1/3}><a href="https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A"><img className='music_img' src={Blackpink} /></a>
                        <div className='music_text'>BLACKPINK · 블랙핑크</div>
                    </Column>
                    <Column width={1/3}><a href="https://www.youtube.com/channel/UCzw-C7fNfs018R1FzIKnlaA"><img className='music_img' src={Bigbang} /></a>
                        <div className='music_text'>BIG BANG · 빅뱅</div>
                    </Column>
                    {/* <Column width={1/4}><a href="https://www.youtube.com/watch?v=JQGRg8XBnB4"><img src={Momoland} /></a>MOMOLAND</Column> */}
                </Row>
                <Row>
                    <Column width={1/3}><a href="https://www.youtube.com/watch?v=TcytstV1_XE"><img className='music_img' src={Crush} /></a>
                        <div className='music_text'>CRUSH · 크러쉬</div>
                    </Column>
                    <Column width={1/3}><a href="https://www.youtube.com/watch?v=VlxTWhoPHhY"><img className='music_img' src={Kimbumsoo} /></a>
                        <div className='music_text'>KIM BUM SOO · 김범수</div>
                    </Column>
                    {/* <Column width={1/4}><a href="https://www.youtube.com/watch?v=ZHoLaLlL5lA"><img src={Zico} /></a>ZICO</Column> */}
                    <Column width={1/3}><a href="https://www.youtube.com/watch?v=EiVmQZwJhsA"><img className='music_img' src={Iu} /></a>
                        <div className='music_text'>IU · 아이유</div>
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

const connectedMusicPage = connect(mapStateToProps)(MusicPage);
export { connectedMusicPage as MusicPage };