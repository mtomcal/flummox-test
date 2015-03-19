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


    flux.getStore('starship')
      .addListener('change', function () {
        Router.run(Routes, req.path, function (Handler, state) {
          var asyncProps = flux.serialize();
          var entry = React.renderToString(<Handler />);
          var html = React.renderToStaticMarkup(<ServerBootstrap asyncProps={asyncProps} bodyHTML={entry} />);
          res.send('<!DOCTYPE html>' + html);
        });
      });

    flux.getActions('starship').fetch(9);
  });

  app.listen(3000);
}

module.exports = server;
