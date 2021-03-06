import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import { Navbar, Nav , NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';

class UserNav extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.isLoggedIn
                ?<Nav>
                    <NavItem href='/profile'>
                        <Image width="35" height="35" responsive circle src={this.props.pictureUrl}/>
                    </NavItem>
                    <NavDropdown eventKey={3} title= {<span className='nav-center'>{this.props.firstName}</span>} id="basic-nav-dropdown">
                            <MenuItem href="/profile"eventKey={3.1}>Me</MenuItem>
                            <MenuItem href="/match"eventKey={3.1}>Match</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2} href = "/login">Logout</MenuItem>
                    </NavDropdown>
                </Nav >

                : <Nav pullRight>
                    <NavItem eventKey={1} href="/login">
                        Login
                    </NavItem>
                    <NavItem eventKey={2} href="/register">
                        Sign Up
                    </NavItem>
                </Nav>}

            </div>
        )
    }
}

export default UserNav;
