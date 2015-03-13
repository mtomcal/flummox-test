/* jshint: esnext: true, browser: true */
import React from 'react';
import {Route, DefaultRoute, RouteHandler} from 'react-router'

export default (
    <Route handler={DataHarness}>
        <Route path="/" handler={StarshipName} />
        <Route path="/about" handler={About} />
    </Route>
);

