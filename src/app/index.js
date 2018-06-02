import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Search from '../search';
import Create_Org from '../organization-info';
import Header from './Header';

const App = () => (
  <div>
    <header style={{ display: 'none' }}>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main style={{}}>
      <Header />
      <div
        style={{
          marginTop: '10px',
          width: '100%',
          paddingLeft: '10%',
          paddingRight: '10%'
        }}>
        <Route exact path="/" component={Create_Org} />
        <Route path="/companies" component={Home} />
        <Route path="/people" component={Home} />
        <Route exact path="/about-us" component={About} />
      </div>
    </main>
  </div>
);

export default App;
