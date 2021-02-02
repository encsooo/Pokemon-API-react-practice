import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Pokemon from './Pokemon';

import '../css/App.css';

const App = () => {
  return (
    <Router>
      <main>
        <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/pokemon' component={Pokemon} />
          </Switch>
      </main>
    </Router>
  )
}

export default App;
