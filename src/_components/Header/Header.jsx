import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Navbar, Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import { store } from '../../_helpers/store';
import './styles.css'

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
                <Navbar fixedTop bsStyle='default' collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {this.state.isLoggedIn
                            ? <a href="#home" className="nav-center">handshake</a>
                            : <a href="#home">handshake</a>
                            }
                        </Navbar.Brand>
                        <Nav>
                          <NavItem eventKey={1} href="#team">
                            {this.state.isLoggedIn
                                ? <span className="nav-center">team</span>
                                : <span>team</span> }
                          </NavItem>
                        </Nav>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        {/* Checks to see if user is logged in. Shows my Profile
                            if true, else shows login/signup prompt*/}

                            {/*< UserNav firstName = { this.state.firstName } pictureUrl = {this.state.pictureUrl} isLoggedIn = { this.state.isLoggedIn } />*/}

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
