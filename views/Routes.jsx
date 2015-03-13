/* jshint: esnext: true, browser: true */
import React from 'react';
import {Route, DefaultRoute, RouteHandler} from 'react-router'
import ListContainer from './ListContainer.jsx'

export default (
    <Route>
        <Route handler={ListContainer} path="/" />
    </Route>
);

