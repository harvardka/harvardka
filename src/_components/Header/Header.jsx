import React from 'react';
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
                            ? <a href="/" className="nav-center">
                                <Image
                                        responsive
                                        src={require('./log.jpg')}
                                />
                                </a>
                            : <a href="/">
                                <Image
                                    responsive
                                    src={require('./log.jpg')}
                                />
                                </a>
                            }
                        </Navbar.Brand>
                        <Nav>
                          <NavItem eventKey={1} href="#/about">
                            {this.state.isLoggedIn
                                ? <span className="nav-center">about</span>
                                : <span>about</span> }
                          </NavItem>
                        </Nav>
                        <Nav>
                          <NavItem eventKey={1} href="#events">
                            {this.state.isLoggedIn
                                ? <span className="nav-center">events</span>
                                : <span>events</span> }
                          </NavItem>
                        </Nav>
                        <Nav>
                          <NavItem eventKey={2} href='#/team'>
                            {this.state.isLoggedIn
                                ? <span className="nav-center">team</span>
                                : <span>team</span> }
                          </NavItem>
                        </Nav>
                        <Nav>
                          <NavItem eventKey={2} href='#/contact'>
                            {this.state.isLoggedIn
                                ? <span className="nav-center">contact</span>
                                : <span>contact</span> }
                          </NavItem>
                        </Nav>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    {/* <Navbar.Collapse>
                        <Nav pullRight>
                        </Nav>
                    </Navbar.Collapse> */}
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
