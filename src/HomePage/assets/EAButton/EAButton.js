import React, { Component } from 'react';
import './styles.css';
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import EAModal from './EAModal';
import { connect } from 'react-redux';


export default class EAButton extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow(){
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="button">
                <button onClick={ this.handleShow } className="box">
                    Sign up for SibFam
                </button>

                <EAModal show={ this.state.show } handleShow={ this.handleShow }/>
            </div>
        )
    }
}
