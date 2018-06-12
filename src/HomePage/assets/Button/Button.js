import React, { Component } from 'react';
import './styles.css';

import '../EmailCapture';
import EmailCapture from '../EmailCapture';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    captureEmail() {
        console.log(this.state);
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div className="button">
                <button 
                    onClick={this.captureEmail.bind(this)}
                    className="box"
                >
                    Get Early Access
                </button>
                {this.state.showPopup ?
                    <EmailCapture
                        closePopup={this.captureEmail.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}