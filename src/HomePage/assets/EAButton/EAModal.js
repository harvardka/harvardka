import React from 'react';
import './styles.css';
import axios from 'axios';
import EAAlert from './EAAlert';
import { Flex, Box } from 'rebass';
import { Radio, InputGroup, MenuItem, DropdownButton, Alert, Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class EAModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            success: null,
            orgType: 'Organization (optional)',
            orgName: ''

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOrgClick = this.handleOrgClick.bind(this);
    }

    handleSubmit(e){
        axios.post('http://eng-cache-198419.appspot.com/create_user',{
            name: this.state.name,
            email: this.state.email,
            orgType: this.state.orgType,
            orgName: this.state.orgName
        })

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

    handleOrgClick(e) {
        e.preventDefault();
        this.setState( { orgType: e.target.title})
    }

    render() {
        return (
            <div className="button">

                <Modal show={this.props.show} onHide={this.props.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Early Access</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Be among the first to get Handshake.</h2>
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

                                <br/><br/>

                                <FormGroup controlId="formInlineEmail">
                                    <ControlLabel>Email</ControlLabel>{'  '}
                                    <FormControl
                                        type="email"
                                        placeholder="you@mail.com"
                                        value = { this.state.email }
                                        onChange = { this.handleChange }
                                        name="email"
                                    />
                                </FormGroup>
                                <br/><br/>

                                <FormGroup justify='true'>
                                    <InputGroup>

                                        <DropdownButton
                                            componentClass={InputGroup.Button}
                                            id="input-dropdown-addon"
                                            title={ this.state.orgType }
                                        >
                                            <MenuItem onClick = { this.handleOrgClick } name="orgType" title="Startup" >Startup</MenuItem>
                                            <MenuItem onClick = { this.handleOrgClick } name="orgType" title="VC">VC</MenuItem>
                                            <MenuItem onClick = { this.handleOrgClick } name="orgType" title="Other">Other</MenuItem>
                                        </DropdownButton>

                                        <div>
                                        {   this.state.orgType == "Organization (optional)"
                                            ? <div></div>
                                            : <div>
                                                <FormControl
                                                onChange = {this.handleChange}
                                                name="orgName"
                                                type="text"
                                                placeholder= { this.state.orgType == "Startup" ? "Handshake" : "First Round Ventures"}
                                                />
                                            </div>}
                                        </div>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                            <br/>

                            <EAAlert success={this.state.success}/>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button form="signup" type="submit">Sign me up!</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default EAModal;
