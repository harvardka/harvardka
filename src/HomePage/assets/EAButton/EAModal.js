import React, { Component } from 'react';
import './styles.css';

import { Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class EAModal extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: ''
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleClose(){
        this.setState({ show: false })
    }

    handleSubmit(){
        this.setState({ show: false })
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="button">


                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Early Access</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Be one of the first in the US to get Handshake.</h2>
                        <div>
                            <Form inline>
                                <FormGroup  controlId="formInlineName">
                                    <ControlLabel>Name</ControlLabel>{' '}
                                    <FormControl
                                        type="text"
                                        placeholder="Eric Li"
                                        value = { this.state.name }
                                        onChange = { this.handleChange }
                                        name="name"
                                    />
                                </FormGroup>{'      '}
                                <FormGroup controlId="formInlineEmail">
                                    <ControlLabel>Email</ControlLabel>{'  '}
                                    <FormControl
                                        type="email"
                                        placeholder="you@mail.com"
                                        value = { this.state.email }
                                        onChange = { this.handleChange }
                                        name="email"
                                    />
                                </FormGroup>{' '}
                                <Button onSubmit={ this.handleSubmit } type="submit">Signup</Button>
                            </Form>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
