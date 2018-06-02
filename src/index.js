import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './common/store';
import App from './app';

// apollo
import { ApolloProvider } from 'react-apollo';
import client from './app/client';

import 'sanitize.css/sanitize.css';
import './common/index.css';

import 'bootstrap';
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
