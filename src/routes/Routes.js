import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AdminScreen,ContactUsScreen, TagScreen } from '../screen';

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

class PublicRoutes extends Component {

    renderRoutes() {
        // window.onpopstate = function (event) { history.go(1); };
        return (
            <Switch>
                <Route exact path="/" component={AdminScreen} />
                <Route exact path="/tag" component={TagScreen} />
                <Route exact path="/contact-us" component={ContactUsScreen} />
            </Switch>
        );
    }

    render() {
        return (
            <Router history={history}>
                {this.renderRoutes()}
            </Router>
        )
    }
}

export default PublicRoutes;