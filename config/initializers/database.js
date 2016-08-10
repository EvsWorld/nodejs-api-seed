'use strict';

var nconf = require('nconf');
var logger = require('winston');
var mongoose   = require('mongoose');

module.exports = function(cb){
  logger.info('[DB] Connecting to ' + nconf.get('database').server + ' …' );  
  mongoose.connect(nconf.get('database').server, {}, cb); // connect to our database
};
