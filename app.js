/**
 * Bootstrap ES6 Features
 */
require('babel/register')({
  experimental: true,
  compact: false
});

/**
 * Run the Server
 */
var server = require('./server');
server();


