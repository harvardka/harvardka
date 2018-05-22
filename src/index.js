import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';

// apollo
import { ApolloProvider } from 'react-apollo'
import client from './client'

import 'sanitize.css/sanitize.css';
import './index.css';

import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const target = document.querySelector('#root');

render(
  <Provider store={store}>
  <ApolloProvider client={client}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
    </ApolloProvider>
  </Provider>,
  target
);
