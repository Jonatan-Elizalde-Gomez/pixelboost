
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage';
import Contact from '../components/pages/Contact';
import Compra from '../components/pages/Compra';
import Compras from '../components/pages/Compras';

function Routes() {
    return (
        <HashRouter >
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/contactanos" component={Contact} />
                <Route exact path="/compra" component={Compra} />
                <Route exact path="/compras" component={Compras} />

            </Switch>
        </HashRouter>
    );
}

export default Routes;
