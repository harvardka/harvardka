import React from 'react';
import './styles.css';
import axios from 'axios';
import EAAlert from './EAAlert';

import { Alert, Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class EAModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            success: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        axios.post('http://eng-cache-198419.appspot.com/create_user',{
            name: this.state.name,
            email: this.state.email
        })
        // .catch(function (error){
        //     console.log(error)
        // })

        .then((response) => {
            return (response.data.statusCode === 200);
        })
        .then((isSuccess) =>{
            this.setState({success: isSuccess});
        });

        e.preventDefault();
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="button">

                <Modal show={this.props.show} onHide={this.props.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Early Access</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Be one of the first in the US to get Handshake.</h2>
                        <div>
                            <Form inline onSubmit={ this.handleSubmit } id="signup" >
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
                                    />{'   '}
                                </FormGroup>{' '}

                            </Form>

                            <br/>

                            <EAAlert success={this.state.success}/>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ this.props.handleShow }>Close</Button>
                        <Button form="signup" type="submit">Signup</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default EAModal;
