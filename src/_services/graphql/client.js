/*
The apollo client
 */
// Overall



// vendor modules
import ApolloClient from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  // uri: 'http://104.196.196.64:7474/graphql/'
  uri: 'http://eng-cache-198419.appspot.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: 'Basic bmVvNGo6Y29tbW9uaw=='
    }
  };
});

const Client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // link: "http://104.196.196.64:7474/graphql/",
  link: authLink.concat(httpLink),
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default Client;
