import React, { Component } from 'react';
import fire from './fire';

import SignUpView from './EmailCapture'

class PopUp extends Component {
    handleSignUp = async event => {
        event.preventDefault();
        const { email } = event.target.elements;
        try {
          const user = await fire
            .auth()
            .createUserWithEmailAndPassword(email.value, '000000');
        } catch (error) {
          alert(error);
        }
      };
      render() {
        return <SignUpView onSubmit={this.handleSignUp} />;
      }
}

export default PopUp;