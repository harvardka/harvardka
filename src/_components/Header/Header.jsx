import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Navbar, Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import { store } from '../../_helpers/store';

// Assets
import UserNav  from './assets/UserNav';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            imageSource: '',
            firstName: '',
            lastName: '',
            pictureUrl: ''
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);

    }

    componentWillMount(){
        store.subscribe(this.handleLoginChange);
        this.handleLoginChange()
    };

    handleLoginChange(){
        if (store.getState().authentication.loggedIn){
            this.setState({
                isLoggedIn: true,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                pictureUrl: this.props.user.pictureUrl,
            });
            // alert(this.state.imageSource);
        }
        else {
            this.setState({
                isLoggedIn: false}
            );
        }
    }

    render() {
        return (
            <div>
                <Navbar inverse  collapseOnSelect >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Uneaux</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        {/* Checks to see if user is logged in. Shows my Profile
                            if true, else shows login/signup prompt*/}

                            < UserNav firstName = { this.state.firstName } pictureUrl = {this.state.pictureUrl} isLoggedIn = { this.state.isLoggedIn } />

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
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

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
