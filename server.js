// Module dependencies.
var http = require('http'),
    app = require('./config/app')();

// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('EASY Stack server listening on port ' + app.get('port') + ' in ' + app.get('env') + ' environment.');
});
