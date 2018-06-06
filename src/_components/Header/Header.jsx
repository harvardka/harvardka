import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

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
            lastName: ''
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);

    }

    componentWillMount(){
        store.subscribe(this.handleLoginChange);
    };

    handleLoginChange(){
        if (store.getState().authentication.loggedIn){
            this.setState({
                isLoggedIn: true,
                firstName: store.getState().authentication.user.firstName,
                lastName: store.getState().authentication.user.lastName,
                imageSource: JSON.stringify(localStorage.getItem('user')),
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

                            < UserNav firstName = { this.state.firstName } isLoggedIn = { this.state.isLoggedIn } />

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
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
