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
                    first={store.getState().authentication.user.firstName}
                    last={store.getState().authentication.user.lastName}
                    pic={this.props.user.pictureUrl}
                />
            </Div>
        );
    }
}

/* Below, registering is a filler. It modifies a state that is irrelevant to your
component. Here, though, can you use mapStateToProps accordingly.*/
function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedTestPage = connect(mapStateToProps)(ProfilePage);
export { connectedTestPage as ProfilePage };
