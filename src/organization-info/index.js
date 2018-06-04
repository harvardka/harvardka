import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { toggleJoin, toggleCreate } from './organization_flow';
import JoinOrg from './JoinOrg';
import CreateOrg from './CreateOrg';

const Create_Org = ({ create, str, toggleJoin, toggleCreate }) => (
  <Col>
    <Row>
      {create && <h1>Create an Organization</h1>}
      {!create && <h1>Join Organization</h1>}
    </Row>
    <Row>
      {create && (
        <Button bsStyle="default" onClick={toggleJoin}>
          Join Organization
        </Button>
      )}
      {!create && (
        <Button bsStyle="default" onClick={toggleCreate}>
          Create Organization
        </Button>
      )}
    </Row>
    {!create && <JoinOrg />}
    {create && <CreateOrg />}
  </Col>
);

const mapStateToProps = state => ({
  create: state.organization_flow.create,
  str: state.organization_flow.str
});

// const mapDispatchToProps = dispatch => {
//   return {
//     changeText
//   }
// }
// bindActionCreators(
//   {
//     changeText
//   }
// )

export default connect(mapStateToProps, { toggleCreate, toggleJoin })(
  Create_Org
);
