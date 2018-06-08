import React, {Component} from 'react';
import {Box, Heading, Row, Column, Flex, Subhead, Border, Divider, Message, Text} from 'rebass';
import {Alert, strong, Image, Button} from 'react-bootstrap';
import user from '../containers/profile/user.png'

class WhiteSpace extends React.Component {
  render () {
    return (
      <Box px={1} py={this.props.y}></Box>
    )
  }
}

class Br extends Component {
  render () {
    return (
      <br></br>
    )
  }
}

class Descr extends Component {
  render () {
    return (
      <Box>
        <div className='text-center'>
          <strong>{this.props.main}</strong>
          <Br />
          <p >{this.props.sub}</p>
        </div>
      </Box>
    )
  }
}

class UserInfo extends Component {
  render () {
    return (
      <Border
        p={10}
        borderColor='#00A2FF'
        top
        bottom>
        <WhiteSpace y={2} />
        <Subhead align='center'>User Profile</Subhead>
        <Divider
          w={1}
        />
        <WhiteSpace y={2} />
          <Descr main={'Massachusetts'} sub={'Cambridge'} />
          <Descr main={'Company'} sub={'Occupation'} />
          <Descr main={'No. of Connections'} sub={'Rating'} />
        <WhiteSpace y={2} />
        <div className='text-center'>
          <Button bsSize='small'>Edit Info</Button>
        </div>
        </Border>
    )
  }
}



class AlertDismissable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="warning" onDismiss={this.handleDismiss}>
          <strong>Hold tight!</strong> Your request to join an organization is pending.
        </Alert>
      );
    }
    return <Box><Button onClick={this.handleShow}> See organization request status </Button></Box>
  }
}
const checked = false;

const ProfileInfo = () => (
  <div>
  <Message bg='#00A2FF'> </Message>
  <WhiteSpace y={2} />
  <Row>
    <Column width={3/4}>
      <Border
        p={10}
        borderColor='#00A2FF'
        top
        bottom>
      <Flex flexWrap='wrap'>
          <Box width={1/6}  p={15}>
            <div class="text-center">
              <Image src={user} height="125" width="125" align='center' rounded/>
            </div>
          </Box>
          <Box p={40} width={5/6}>
              <Heading
                is='h2'
                fontSize={[ 4, 5, 6 ]} align='right' color='#00A2FF'>
                Theresa Nguyen
              </Heading>
              <Text color='#00A2FF' align='right'>Student at Harvard University </Text>
          </Box>
        </Flex>
        </Border>
      <WhiteSpace y={2} />
      <Row>
        <Column width={1/3}>
          <UserInfo />
        </Column>
        <Column width={2/3}>
          <UserInfo />
        </Column>
      </Row>
    </Column>
    <Column width={1/4}>
    <Border
      p={10}
      borderColor='#00A2FF'
      top
      bottom>
        <Box color='#59565F' p={10} height={1}>
            <div className="text-center">
              <WhiteSpace y={2} />
              <Subhead>Organizations</Subhead>
              <Divider></Divider>
              <WhiteSpace y={2}/>
              <strong>Company 1</strong>
              <p>Start-End <Br/> Role/Position</p>
              <strong>Company 1</strong>
              <p>Start-End <Br/> Role/Position</p>
              <strong>Company 1</strong>
              <p>Start-End <Br/> Role/Position</p>
              <strong>Company 1</strong>
              <p>Start-End <Br/> Role/Position</p>
              <Button bsSize='small'>Add Organization</Button>
              <WhiteSpace y={2} />
            </div>
        </Box>
      </Border>
    </Column>
  </Row>


  </div>
)

export default ProfileInfo;
