import React, { Component } from 'react';
import TextAnimation from '../TextAnimation';
import {Box, Flex, Column, Row} from 'rebass';
import { Fade } from 'react-bootstrap';

class FadeContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    this.fadeOut = this.fadeOut.bind(this);

  }


  fadeOut() {
    this.setState({open: false})
  }


  render(){
    console.log('hello')
    return(
      <Fade timeout={300} in={this.state.open} unmountOnExit={true}>
        <Flex alignItems='center' style={{zIndex: '1050', position: 'fixed', width: '100%', height: '100vh', top: '0', right: '0', backgroundColor: '#c4c4c4'}}>
          < TextAnimation fadeOut={this.fadeOut}/>
        </Flex>
      </Fade>
    )
  }
}

export default FadeContainer;
