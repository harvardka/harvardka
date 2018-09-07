import React from 'react';
import {
    HashRouter as Router,
    Route,
    } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from '../_components/Header';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { Banner } from 'rebass';

// Pages
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { TestPage } from '../TestPage';
import { ProfilePage } from '../ProfilePage'
import { MatchPage } from '../MatchPage';
import { AdminPage } from '../AdminPage';
import { AboutPage } from '../AboutPage';
import { TeamPage } from '../TeamPage';

import { EventsPage } from '../EventsPage';
import { ContactPage } from '../ContactPage';

import '../_constants/styles.css'

// Apollo
import { ApolloProvider } from 'react-apollo';
import Client from '../_services/graphql/client';


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                < Header / >
                < Banner bg='white' minHeight='25%' />
                <div>
                    <div>
                        <div>
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }

                            {/* All routes can access Apollo if necessary. */}
                            <ApolloProvider client = { Client }>
                                <Router history={history}>
                                    <div>
                                        <div className="col-sm-10 col-sm-offset-1">
                                          <Route exact path="/" component={HomePage} />
                                          <Route path="/login" component={LoginPage} />
                                          <Route path="/register" component={RegisterPage} />
                                          <Route path="/test" component={TestPage} />
                                          <Route path="/about" component={AboutPage} />
                                          <Route path="/team" component={TeamPage} />
                                          
                                          <Route path='/events' component={EventsPage} />
                                          <Route path='/:contact' component={ContactPage} />
                                          
                                          <PrivateRoute exact path="/admin" component={AdminPage} />
                                          <PrivateRoute exact path="/match" component={MatchPage} />
                                          <PrivateRoute exact path="/profile" component={ProfilePage} />
                                        </div>
                                    </div>
                                </Router>
                            </ApolloProvider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
