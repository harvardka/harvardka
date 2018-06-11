import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import styled from 'styled-components';

import { store } from '../_helpers/store';

// Assets
import ProfileInfo from './assets/ProfileInfo';

const Div = styled.div`
    background-color: white;
    padding: 20px;
`;

class ProfilePage extends React.Component {
    render() {
        alert(this.props.user.pictureUrl)
        return (
            <Div>
                <ProfileInfo
                    first={this.props.user.firstName}
                    last={this.props.user.lastName}
                    pic={this.props.user.pictureUrl}
                />
            </Div>
        );
    }
}

/* Below, mapStateToProps is what will get our global store variables to be accessible here.
    With this, you can now access this.props.user.firstName, for example.
.*/
function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedTestPage = connect(mapStateToProps)(ProfilePage);
export { connectedTestPage as ProfilePage };
