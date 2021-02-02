import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home.jsx';
import About from './About.jsx';
import Pokemon from './Pokemon';
import PokeCard from './PokeCard';
import Footer from './Footer.jsx';

import App from './App.jsx';

const Routes = () => (
    <Router>
        <main>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about'  component={About} />
                <Route path='/pokemon' exact component={Pokemon} />
                <Route path='/PokeCard' component={PokeCard} />
            </Switch>
        </main>
            <Footer />
    </Router>
)

export default Routes;
