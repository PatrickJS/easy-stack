var express = require('express');
var path = require('path');

module.exports = function() {
  var app = express();
  var publicDir = path.join(__dirname, '../../public');

  // Store all environment variables
  app.set('port', process.env.PORT || 3000);
  app.set('env',  process.env.NODE_ENV || 'development');
  app.set('views', __dirname + '../views');
  app.set('view engine', 'jade');

  //Set locals for jade views
  app.locals({
    bower:       'bower_components',
    environment: process.env.NODE_ENV,
    development: process.env.NODE_ENV === 'development',
    staging:     process.env.NODE_ENV === 'staging',
    production:  process.env.NODE_ENV === 'production'
  });

  // Basic configuration
  app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(publicDir));
  });

  // Environment specific configuration
  require('./environments')(app);

  // Database configuration
  require('./database')(app);

  // Routes
  require('./routes')(app);

  return app;
};
