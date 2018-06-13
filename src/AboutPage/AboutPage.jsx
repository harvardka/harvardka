import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

// Assets
import './assets/styles.css';

const puppy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSru5ntAuNuNWolBylR9phQ5uUY339-SQBzHhrXRB1KJvcr9Rh4";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
              <div className='h5'>Friends & Family is coming to Boston</div>
              <div className='h1'>The simplest way to <br/> get connected, made for you</div>
            </div>
        )
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

const connectedAboutPage = connect(mapStateToProps)(AboutPage);
export { connectedAboutPage as AboutPage };
