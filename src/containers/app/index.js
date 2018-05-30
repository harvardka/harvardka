import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <header style={{display:"none"}}>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main style={{padding: "15px"}}>
      <Route exact path="/" component={Home} />
      <Route path="/companies" component={Home}/>
      <Route path="/people" component={Home}/>
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
