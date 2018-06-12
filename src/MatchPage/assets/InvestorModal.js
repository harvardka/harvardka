import React, { Component } from 'react';
import{ Popover, Modal, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';

class InvestorModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
    };
  }

  handleClose() {
    this.props.toggleModal();
  }


  render() {
    const investor = this.props.investor
    if(investor){
      return (
          <Modal show={this.props.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{investor.companyName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{investor.description}</p>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
      );
    }else{
      return(null)
    }
  }
}

export default InvestorModal;
