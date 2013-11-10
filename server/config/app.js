var express = require('express');
var path    = require('path');
var stylus  = require('stylus');
var nib     = require('nib');

module.exports = function() {
  var app = express();

  var publicDir = function(path) {
    path = path || '';
    return path.join(__dirname, '../../client'+path);
  };

  var compile = function (str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .set('warn', true)
      .render(nib());
  };

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
    app.use(stylus.middleware({
      src: publicDir('/styles/'),
      dest: publicDir('/styles/'),
      compile: compile
    }));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(publicDir()));
  });

  // Environment specific configuration
  require('./environments')(app);

  // Database configuration
  require('./database')(app);

  // Routes
  require('./routes')(app);

  return app;
};
