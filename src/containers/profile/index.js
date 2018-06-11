import React from 'react';
import {
  Button,
  Image,
  Grid,
  Col,
  Row,
  Thumbnail,
  Alert
} from 'react-bootstrap';
import user from './user.png'
import ProfileInfo from '../../components/ProfileInfo'


const Profile = () => (
  <ProfileInfo />
  // <Grid>
  //   <Alert bsStyle="info"> Your request to join an organization is pending </Alert>
  //   <Row className="show-grid">
  //     <Col xs={6} md={3}>
  //       <Thumbnail src={user}/>
  //       <h3> User&#8217;s Name </h3>
  //       <p> maybe a short bio </p>
  //     </Col>
  //     <Col xs={12} md={9}>
  //       <h3> Name </h3>
  //     </Col>
  //   </Row>
  // </Grid>
)

export default Profile;
