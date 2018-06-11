import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from '../_components/Header';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';

// Pages
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { TestPage } from '../TestPage';
import { ProfilePage } from '../ProfilePage'
import { MatchPage } from '../MatchPage';

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
                                          <PrivateRoute exact path="/" component={HomePage} />
                                          <Route path="/login" component={LoginPage} />
                                          <Route path="/register" component={RegisterPage} />
                                          <Route path="/test" component={TestPage} />
                                          <Route path="/match" component={MatchPage} />
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
