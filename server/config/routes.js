module.exports = function(app) {
  app.get('/*', function(req, res) {
    res.render('index.html', {
      title: 'EASY Stack',
      description: '',
      keywords: '',
      author: ''
    });
  });
};

exports.template = function (req, res) {
  var name = req.params.name;
  res.render('template/' + name);
};
