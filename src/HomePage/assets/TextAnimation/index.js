import React, { Component } from 'react';
import {Box, Flex, Column, Row} from 'rebass';

const words1 = ['inventor', 'creator', 'founder', 'innovator', 'maker', 'coder', 'programmer', 'pioneer']

const words2 = ['accelerator', 'promoter', 'supporter', 'backer']

class TextAnimation extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      word1: 'inventor',
      word2: 'accelerator',
      seconds: 0
    };

    this.getWords = this.getWords.bind(this);

  }

  componentDidMount() {
    this.interval = setInterval(() => this.getWords(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getWords(){
    if(this.state.seconds < 3){
      const word1 = words1[Math.floor(Math.random()*words1.length)];
      const word2 = words2[Math.floor(Math.random()*words2.length)];
      this.setState({word1: word1, word2: word2, seconds: this.state.seconds + 1})
    }else{
      this.props.fadeOut()
    }
  }

  render(){
    return(
      <Flex width="100%" justifyContent="center" style={{color: 'white'}}>
        <Box width={1/4} style={{textAlign: 'right'}}><h1>{this.state.word1},</h1></Box>
        <Box w="120px" style={{textAlign: 'center'}}><h1>meet</h1></Box>
        <Box width={1/4}><h1>{this.state.word2}</h1></Box>
      </Flex>
    )
  }
}

export default TextAnimation;
