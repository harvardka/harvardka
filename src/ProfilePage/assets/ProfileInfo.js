import React, { Component } from 'react';
import {Flex, Box, Heading, Row, Column, Subhead, Border, Divider, Text, Input, Carousel, Dot} from 'rebass';
import {Alert, strong, Image, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { store } from '../../_helpers/store';
import { userActions } from '../../_actions';
import TextInput from './TextInput';

const dark = '#59565F';

//green
const accent = '#9FD356';

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

class Ellipsis extends Component {
  render () {
    return (
      <span>
      <Dot bg={this.props.bg} size={this.props.size}/>
      <Dot bg={this.props.bg} size={this.props.size}/>
      <Dot bg={this.props.bg} size={this.props.size}/>
      </span>
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
        <div className='text-center col-sm-9 col-sm-offset-2'>
          <Text fontWeight='bold' color={accent} fontSize={14}>{this.props.main}</Text>
          <p>{this.props.sub}</p>
        </div>
      </Box>
    )
  }
}


class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      interests: 'I enjoy running, music, photography, and art',
      funFact: 'I\'ve read the Harry Potter series at least 10 times.',
      million: 'I would travel the world and buy lots of cats.',
      thing: 'My headphones'
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
    if (value.length > 60) {
      alert('too long!');
    }
    else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(){
    this.setState({
      edit: false
    })
  }

  render () {
    return (
      <Border
        p={10}
        border={1.5}
        borderColor={accent}
        style={{borderRadius: '5px'}}>
        <WhiteSpace y={1} />
        <Subhead align='center' color={accent}>About Me</Subhead>
        <Divider
          w={1}
          color='white'
        />
        <WhiteSpace y={2} />
        {this.state.edit

          ? <div>
            <Flex>
              <Box width={1/2} px={3}>
              <form>
                <Text fontWeight='bold' color={accent} fontSize={14}>My Interests</Text>
                <TextInput id='interests' name='interests' value={this.state.interests} onChange={this.handleChange}/>
              </form>
              </Box>
              <Box width={1/2} px={3}>
                <Text fontWeight='bold' align='right' color={accent} fontSize={14}>Fun Fact about Me</Text>
                <TextInput id='funFact' name='funFact' value={this.state.funFact} onChange={this.handleChange}/>
              </Box>
            </Flex>
            <Flex>
              <Box width={1/2} px={3}>
                <Text fontWeight='bold' color={accent} fontSize={14}>If I won $1 million...</Text>
                <TextInput id='million' name='million' value={this.state.million} onChange={this.handleChange}/>
              </Box>
              <Box width={1/2} px={3}>
              <Text fontWeight='bold' align='right' color={accent} fontSize={14}>One thing I cannot live without is...</Text>
                <TextInput id='thing' name='thing' value={this.state.thing} onChange={this.handleChange}/>
              </Box>
            </Flex>
            <WhiteSpace y={2} />
            <div className='text-center'>
              <Button bsSize='small' onClick={this.handleSubmit}>Save</Button>

            </div>
          </div>
          : <div>
            <Flex color={dark}>
              <Box width={1/2}>
                <Descr2 main={'My Interests'} sub={this.state.interests} />
              </Box>
              <Box width={1/2}>
                <Descr2 main={'Fun Fact'} sub={this.state.funFact} />
              </Box>
            </Flex>
            <WhiteSpace y={2} />
            <Flex color={dark}>
              <Box width={1/2}>
                <Descr2 main={'If I won $1 million...'} sub={this.state.million} />
              </Box>
              <Box width={1/2}>
                <Descr2 main={'One thing I couldn\'t live without'} sub={this.state.thing} />
              </Box>
            </Flex>
            <div className='text-center'>
              <Button bsSize='small' onClick={this.handleEdit}>Edit Profile</Button>

            </div>

          </div>
        }
        <WhiteSpace y={2} />
        <div className='text-center'>
            <Ellipsis size={12.5} bg={accent} />
            <Ellipsis size={15} bg={accent} />
            <Ellipsis size={17} bg={accent} />
            <Ellipsis size={15} bg={accent} />
            <Ellipsis size={12.5} bg={accent} />
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
      <div>
        <WhiteSpace y={1} />
        <div className='text-center'>
            <Ellipsis color='white' size={15} />
        </div>
        <WhiteSpace y={2} />
        <Subhead align='center' color='white'>Basic Info</Subhead>
        <Divider
          w={1}
          color='white'
        />

        { this.state.edit

        ? <div>
            <WhiteSpace y={1} />
            <form>
                <div className="text-center col-sm-8 col-sm-offset-2">
                <TextInput id='region'  name='region' value={this.state.region} onChange={this.handleChange}/>
                <TextInput id='city' name='city' value={this.state.city} onChange={this.handleChange}/>
                <TextInput id='company' name='company' value={this.state.company} onChange={this.handleChange}/>
                <TextInput id='role' name='role' value={this.state.role} onChange={this.handleChange}/>
                </div>
            </form>
                <div className="text-center">
                    <Button bsSize='small' onClick={this.handleSubmit}>Save</Button>
                </div>
        </div>
        : <div>
        <WhiteSpace y={2} />
          <Descr main={this.state.region} sub={this.state.city} />
          <Descr main={this.state.company} sub={this.state.role} />
          <Descr main={this.state.connections} sub={this.state.rating} />
        <WhiteSpace y={2} />
        <div className='text-center'>
          <Button bsSize='small' onClick={this.handleEdit}>Edit Info</Button>
        </div>
        <WhiteSpace y={2} />
        </div>
        }
        </div>
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
        p={15}
        borderColor={accent}
        bg={accent}
        style={{borderRadius: '5px'}}>
              <div className="text-center">
                <WhiteSpace y={2} />
                <Ellipsis size={15} color='white' />
                <WhiteSpace y={1} />
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
                <Ellipsis size={15} color='white' />
                <WhiteSpace y={1} />
              </div>
        </Border>
    )
  }
}

class ProfileInfo extends Component {
  // componentDidMount() {
  //     this.props.dispatch(userActions.getAll());
  // }

  render () {
    //alert(JSON.stringify(this.props.pic))
    return (
      <div>

        <Row>
          <Column width={3/4}>
            <Border
              border={1.5}
              p={10}
              borderColor={accent}
              style={{borderRadius: '5px'}}>
            <div>
              <Flex align="center" >
                  <Box width={1/5}  p={10}>
                    <div className="text-center">
                      <Image src={this.props.pic} width={'100%'} rounded/>
                    </div>
                  </Box>
                  <Box p={20} width={4/5}>
                      <Heading
                        is='h2'
                        fontSize={[ 4, 5, 6 ]} align='right' color={dark}>
                        <Dot bg={accent} size={20}/> <Dot bg={accent} size={20}/> <Dot bg={accent} size={20}/> <Dot bg='white' size={10}/>
                        {this.props.first} {this.props.last}
                      </Heading>
                      <Text color={accent} align='right'>Student at Harvard University </Text>
                  </Box>
                </Flex>
              </div>
              </Border>
            <WhiteSpace y={2} />
            <Row >
              <Column width={1/3} style={{borderRadius: '5px'}} justify="flex-end">
                <Border bg={accent} borderColor={accent} color={dark} style={{borderRadius: '5px'}} p={10} alignItems='stretch'>
                  <UserInfo />
                </Border>
              </Column>
              <Column width={2/3}>
                <AboutMe />
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
