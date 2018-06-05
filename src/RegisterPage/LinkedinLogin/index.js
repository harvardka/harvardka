import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterPage from '../RegisterPage';

//Assets
// import linkedin from './linkedin_fixed.png'

import config from './config'

class LinkedinLogin extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          visibility: true
        }
    }

    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "http://platform.linkedin.com/in.js?async=true";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();
    }

    //Trigger Login for LinkedIn
    // for some reason,      linkedinLogin = () => { doesn't work.
    linkedinLogin(){

        window.IN.init({
            api_key : config.linkedin
        });
        setTimeout(function(){
                this.getUserDetails()
            }.bind(this),1000);


        console.log( "Loaded" );
        this.setState({
            visibility: false
          })
        }

    getUserDetails(){
        window.IN.User.authorize( () => {

            window.IN.API.Profile("me")
                .fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "headline"])
                .result((result) => {
                    console.log(result);
                    // alert("Successfull login from linkedin : "+ result.values[0].headline + result.values[0].firstName + " " + result.values[0].lastName);
                    this.props.handleLinkedInSubmit({
                      firstName: result.values[0].firstName,
                      lastName: result.values[0].lastName,
                      pictureUrl: result.values[0].pictureUrl
                    });
                })
                .error(function(err) {
                    console.log('Import error - Error occured while importing data')
                });
        });

    }
    render(){
        const isLinkedInAuthenticated = !this.state.visibility;
        return(
            <div>
                { isLinkedInAuthenticated? (
                    <br/>
                ) : (
                    <img width='200' src='https://readitfor.me/images/bt-signup-with-linkedin-2017.png' title="linkedin login" alt="linkedin" onClick={ this.linkedinLogin.bind(this)  }/>
                )}
            </div>

        )
    }
}

export default LinkedinLogin;
