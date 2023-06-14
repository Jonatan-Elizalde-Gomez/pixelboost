
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage';
import Contact from '../components/pages/Contact';

function Routes() {
    return (
        <HashRouter >
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/contactanos" component={Contact} />
            </Switch>
        </HashRouter>
    );
}

export default Routes;
