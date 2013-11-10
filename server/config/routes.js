var clouds = require('../controllers/clouds');

module.exports = function(app) {
  app.get('/*', function(req, res) {
    res.render('index.html', {
      title: 'EASY Stack'
    });
  });
};
