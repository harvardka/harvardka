import React, { Component } from 'react';
import {Box, Heading, Row, Column, Flex, Subhead, Border, Divider, Message, Text} from 'rebass';
import {Alert, strong, Image, Button} from 'react-bootstrap';
import { store } from '../../_helpers/store';
import { userActions } from '../../_actions';

//import user from './user.jpg';

const dark = '#59565F';

//green
const accent = '#9FD356';
//const accent = dark;

//orange
//const accent = '#FCAF58'

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
          <Text fontWeight='bold' color='white' fontSize={14}>{this.props.main}</Text>
          <p>{this.props.sub}</p>
        </div>
      </Box>
    )
  }
}

class Descr2 extends Component {
  render () {
    return (
      <Box>
        <div className='text-center'>
          <Text fontWeight='bold' color={accent} fontSize={14}>{this.props.main}</Text>
          <p >{this.props.sub}</p>
        </div>
      </Box>
    )
  }
}



class UserProfile extends Component {
  render () {
    return (
      <Border
        p={10}
        borderColor={accent}
        top
        bottom>
        <WhiteSpace y={2} />
        <Subhead align='center' color={accent}>Basic Info</Subhead>
        <Divider
          w={1}
          color='white'
        />
        <WhiteSpace y={2} />
          <Descr2 main={'Massachusetts'} sub={'Cambridge'} />
          <Descr2 main={'Company'} sub={'Occupation'} />
          <Descr2 main={'No. of Connections'} sub={'Rating'} />
        <WhiteSpace y={2} />
        <div className='text-center'>
          <Button bsSize='small'>Edit Info</Button>
        </div>
        </Border>
    )
  }
}

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      region: 'Massachusetts',
      city: 'Cambridge',
      company: 'Company',
      role: 'Occupation',
      connections: 'No. of Connections',
      rating: 'rating'
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit(){
    this.setState({
      edit: true
    })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.setState({
      edit: false
    });
  }

  render () {
    return (
      <Border
        p={10}
        borderColor='white'
        height={6}
        bg={accent}
        color={dark}
        top
        bottom>
        <WhiteSpace y={2} />
        <Subhead align='center' color='white'>Basic Info</Subhead>
        <Divider
          w={1}
          color='white'
        />

        { this.state.edit

        ? <div>
                <div className="form-group text-center">
                    <input type="text" name="region" value={this.state.region} onChange={this.handleChange}/>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                    <input type="text" name="company" value={this.state.company} onChange={this.handleChange}/>
                    <input type="text" name="role" value={this.state.role} onChange={this.handleChange}/>
                    <input type="text" name="connections" value={this.state.connections} onChange={this.handleChange}/>
                    <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange}/>
                </div>

                <div className="form-group text-center">
                    <Button bsSize='small' onClick={this.handleSubmit}>Save changes</Button>
                </div>
        </div>


        : <div> <WhiteSpace y={2} />
          <Descr main={this.state.region} sub={this.state.city} />
          <Descr main={this.state.company} sub={this.state.role} />
          <Descr main={this.state.connections} sub={this.state.rating} />
        <WhiteSpace y={2} />
        <div className='text-center'>
          <Button bsSize='small' onClick={this.handleEdit}>Edit Info</Button>
        </div>
        </div>
        }

        </Border>
    )
  }
}


class CoName extends Component {
  render () {
    return (
      <div>
        <Text fontWeight='bold' color='white' fontSize={14}>Company Name</Text>
        <p>Start-End <Br/> Role/Position</p>
        <WhiteSpace y={1} />
      </div>
    )
  }
}

class Organizations extends Component {
  render () {
    return (
      <Border
        p={10}
        borderColor={accent}
        bg={accent}
        top
        bottom>
          <Box color={dark} p={10} height={1}>
              <div className="text-center">
                <WhiteSpace y={2} />
                <Subhead color='white'>Organizations</Subhead>
                <WhiteSpace y={1} />
                <Divider></Divider>
                <WhiteSpace y={2}/>
                <CoName />
                <CoName />
                <CoName />
                <CoName />
                <WhiteSpace y={1} />
                <Button bsSize='small' >Add Organization</Button>
                <WhiteSpace y={2} />
              </div>
          </Box>
        </Border>
    )
  }
}

class ProfileInfo extends Component {
  // componentDidMount() {
  //     this.props.dispatch(userActions.getAll());
  // }

  render () {
    alert(this.props.user)
    return (
      <div>
      <Row>
        <Column width={3/4}>
          <Border
            p={10}
            borderColor={accent}
            top
            bottom>
          <Flex flexWrap='wrap'>
              <Box width={1/6}  p={15}>
                <div className="text-center">
                  <Image src={this.props.pic}/>
                </div>
              </Box>
              <Box p={40} width={5/6}>
                  <Heading
                    is='h2'
                    fontSize={[ 4, 5, 6 ]} align='right' color={dark}>
                    {this.props.first} {this.props.last}
                  </Heading>
                  <Text color={accent} align='right'>Student at Harvard University </Text>
              </Box>
            </Flex>
            </Border>
          <WhiteSpace y={2} />
          <Row>
            <Column width={1/3}>
              <UserInfo />
            </Column>
            <Column width={2/3}>
              <UserProfile />
            </Column>
          </Row>
        </Column>
        <Column width={1/4}>
          <Organizations />
        </Column>
      </Row>


      </div>
    )
  }
}

export default ProfileInfo;
