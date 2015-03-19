/* jshint esnext: true */
import express from 'express';
import React from 'react';
import Router from 'react-router';
import ServerBootstrap from './views/ServerBootstrap.jsx';
import Routes from './views/Routes.jsx';
import Flux from './views/Data.jsx';

let app = express();

function server() {

  // LOAD static assets
  app.use('/static', express.static(__dirname + '/static'));

  app.all('/*', function(req, res, next) {
    let flux = new Flux();

    flux.getStore('messages')
      .addListener('change', function () {
        console.log(this);
      });

    flux.getActions('messages').newMessage('Hello, world!');

    Router.run(Routes, req.path, function (Handler, state, asyncProps) {
      var entry = React.renderToString(<Handler />);
      var html = React.renderToStaticMarkup(<ServerBootstrap asyncProps={asyncProps} bodyHTML={entry} />);
      res.send('<!DOCTYPE html>' + html);
    });

  });

  app.listen(3000);
}

module.exports = server;
