import React, { Component } from 'react';
import './styles.css';
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import EAModal from './EAModal';

export default class EAButton extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            name: '',
            email: ''
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow(){
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="button">
                <button onClick={ this.handleShow } className="box">
                    Get Early Access
                </button>

                <EAModal show={ this.state.show }/>
            </div>
        )
    }
}
